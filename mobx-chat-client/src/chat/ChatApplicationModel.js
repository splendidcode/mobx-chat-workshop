import { types } from 'mobx-state-tree';
import { UserManagerModel } from './users/UserManagerModel';

export const ChatApplicationModel = types
  .model('ChatApplication', {
    userManager: types.optional(UserManagerModel, {})
  })
  .views(self => ({
    get currentView() {
      return self.userManager.shouldShowUserForm ? 'userForm' : 'chatWindow';
    }
  }));
