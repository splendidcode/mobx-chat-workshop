import { types } from 'mobx-state-tree';
import { UserModel } from './UserModel';
import {UserFormModel} from "./edit/UserFormModel";

export const UserManagerModel = types
  .model('UserManager', {
    users: types.optional(types.array(UserModel), []),
    currentUser: types.maybe(types.reference(UserModel)),
    userForm: types.optional(UserFormModel, {})
  })
  .actions(self => ({
    createCurrentUser(userFormData) {
      const newUser = UserModel.create({
        id: userFormData.userId,
        displayName: userFormData.displayName
      });
      self.users.push(newUser);
      self.currentUser = newUser;
    }
  }))
  .views(self => ({
    get numUsers() {
      return self.users.length;
    },
    get shouldShowUserForm() {
      return self.currentUser === undefined;
    }
  }));
