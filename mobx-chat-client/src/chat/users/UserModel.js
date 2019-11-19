import { types } from 'mobx-state-tree';

export const UserModel = types
  .model('User', {
    id: types.identifier,
    displayName: types.string,
    isTyping: false
  })
  .actions(self => ({
    setIsTyping(isTyping) {
      self.isTyping = isTyping;
    }
  }));
