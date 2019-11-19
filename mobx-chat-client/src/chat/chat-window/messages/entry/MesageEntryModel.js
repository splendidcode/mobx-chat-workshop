import {MessageModel} from "../MessageModel";
import {getRoot, getSnapshot, types} from "mobx-state-tree";
import {chatClient} from "../../../ChatClient";


export const MessageEntryModel = types.model({
    currentMessage: ''
}).actions(self => ({
    sendMessage() {
        const newMessage = MessageModel.create({
            text: self.currentMessage,
            sender: self.currentUser
        });
        const snapshot = getSnapshot(newMessage);
        console.log("Sending message", snapshot);
        chatClient.publish('/messages', snapshot);
        self.updateMessage('');
    },
    updateMessage(msg) {
        self.currentUser.setIsTyping(msg.length>0);
        self.currentMessage = msg;
    }
})).views(self => ({
    get currentUser(){
        return getRoot(self).userManager.currentUser;
    }
}));
