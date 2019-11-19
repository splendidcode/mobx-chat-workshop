import { types } from 'mobx-state-tree';
import { ChatWindowModel } from './chat-window/ChatWindowModel';
import { UserManagementModel } from './users/UserManagementModel';

export const ChatApplicationModel = types
  .model('ChatApplication', {
    userManager: types.optional(UserManagementModel, {}),
    chatWindow: types.optional(ChatWindowModel, {})
  })
  .views(self => ({
    get currentView() {
      return self.userManager.shouldShowUserForm ? 'userForm' : 'chatWindow';
    }
  }));
