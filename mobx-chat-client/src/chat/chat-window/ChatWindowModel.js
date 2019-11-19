import { types } from 'mobx-state-tree';

import {chatClient} from "../ChatClient";
import {MessageEntryModel} from "./messages/entry/MesageEntryModel";
import {MessageModel} from "./messages/MessageModel";

export const ChatWindowModel = types.model("ChatWindowModel",{
    messages: types.optional(types.array(MessageModel), []),
    messageEntry: types.optional(MessageEntryModel, {}),
    currentTime: types.optional(types.Date, () => new Date())
}).actions(self => ({
    receiveMessage(messageJson){
        self.messages.push(MessageModel.create(messageJson))
    },
    updateCurrentTime(){
        self.currentTime = new Date();
    },
    afterCreate(){
        chatClient.subscribe('/messages', messageJson  => {
            console.log("RECEIVING MESSAGE", messageJson);
            self.receiveMessage(messageJson);
        });
        setInterval(self.updateCurrentTime, 1000);
    }
}));

