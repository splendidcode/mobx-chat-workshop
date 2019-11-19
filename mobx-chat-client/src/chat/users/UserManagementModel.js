import { applySnapshot, onSnapshot, resolveIdentifier, types } from 'mobx-state-tree';
import { UserModel } from './UserModel';
import { UserFormModel } from './edit/UserFormModel';
import { chatClient } from '../ChatClient';

export const UserManagementModel = types
  .model('UserManagementModel', {
    users: types.optional(types.array(UserModel), []),
    currentUser: types.maybe(types.reference(UserModel)),
    userForm: types.optional(UserFormModel, {})
  })
  .actions(self => ({
    addToUsersList(user) {
      const existingUser = resolveIdentifier(UserModel, self, user.id);
      if (existingUser) {
        applySnapshot(existingUser, user);
      } else {
        self.users.push(UserModel.create(user));
      }
    },
    createCurrentUser(userForm) {
      const newUser = UserModel.create({
        id: userForm.userId,
        displayName: userForm.displayName
      });
      self.users.push(newUser);
      self.currentUser = newUser;
      onSnapshot(self.currentUser, user => {
        chatClient.publish('/users', user);
      });
    },
    afterCreate() {
      chatClient.subscribe('/users', user => {
        self.addToUsersList(user);
      });
    }
  }))
  .views(self => ({
    get shouldShowUserForm() {
      return self.currentUser === undefined;
    },
    get numUsers() {
      return self.users.length;
    }
  }));
