import {types} from "mobx-state-tree";

export const UserFormModel = types
  .model('UserForm', {
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
      if (self.userId < 1) {
        return 'UserId is required';
      }
      if (self.displayName < 1) {
        return 'Display Name is required';
      }
      return '';
    }
  }));
