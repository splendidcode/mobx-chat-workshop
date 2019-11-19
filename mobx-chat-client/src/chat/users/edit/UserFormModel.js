import { types } from 'mobx-state-tree';

export const UserFormModel = types
  .model('UserInfo', {
    userId: '',
    displayName: ''
  })
  .actions(self => ({
    updateUserId(userId) {
      self.userId = userId;
    },
    updateDisplayName(displayName) {
      self.displayName = displayName;
    }
  }))
  .views(self => ({
    get isAllowedToSubmit() {
      return self.userId.length > 0 && self.displayName.length > 0;
    },
    get errorMessage() {
      if (self.userId.length < 1) {
        return 'User Id is required';
      }
      if (self.displayName.length < 1) {
        return 'Display name is required';
      }
      return '';
    }
  }));
