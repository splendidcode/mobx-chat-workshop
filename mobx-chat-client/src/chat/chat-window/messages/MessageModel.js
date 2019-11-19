import { getParentOfType, types } from 'mobx-state-tree';
import formatDistance from 'date-fns/formatDistance';
import { UserModel } from '../../users/UserModel';
import { ChatWindowModel } from '../ChatWindowModel';

export const MessageModel = types
  .model({
    text: types.string,
    sender: types.reference(UserModel),
    timestamp: types.optional(types.Date, () => new Date())
  })
  .views(self => ({
    get sentTime() {
      const chatWindow = getParentOfType(self, ChatWindowModel);
      return formatDistance(self.timestamp, chatWindow.currentTime, { includeSeconds: true });
    }
  }));
