/*
import React from 'react';
import {getSnapshot, onPatch, applyPatch, types} from 'mobx-state-tree';
import {useObserver} from 'mobx-react-lite';
import formatRelative from 'date-fns/formatRelative';
import './App.css';
import isBefore from 'date-fns/isBefore';


const client = new Faye.Client('http://localhost:8000/chat');

const User = types.model({
    id: types.identifier,
    displayName: types.string
}).actions(self => ({
    changeDisplayName(newDisplayName) {
        self.displayName = newDisplayName;
    }
}));

const Message = types.model({
    text: types.string,
    sender: types.reference(User),
    timestamp: new Date()
}).views(self => ({
        isBefore(other) {
            return isBefore(self.timestamp, other.timestamp);
        },
        get sentTime(){
            return  formatRelative(self.timestamp, new Date());
        }
    }
));


const ChatApplication = types.model({
    users: types.optional(types.array(User), []),
    currentUser: types.maybe(User),
    messages: types.optional(types.array(Message), []),
    currentMessage: ''
}).actions(self => ({
    sendMessage() {
        console.log("SENDING MESSAGE");
        const newMessage = Message.create({
            text: self.currentMessage,
            sender: self.currentUser
        });
        client.publish('/messages', getSnapshot(newMessage));
        self.currentMessage = '';
    },
    receiveMessage(messageJson){
        self.messages.push(Message.create(messageJson))
    },
    updateMessage(msg) {
        self.currentMessage = msg;
    },
    setCurrentUser(currentUserInfo){
        self.currentUser =  User.create({
            id: currentUserInfo.username,
            displayName: currentUserInfo.displayName
        });
        
    },
    afterCreate(){
        client.subscribe('/messages', messageJson  => {
            console.log("RECEIVING MESSAGE", messageJson);
            self.receiveMessage(messageJson);
        });
    }
})).views(self => ({
}));


const chat = ChatApplication.create({
    currentUser: User.create({id: 'foo', displayName: 'John'})
});

function App() {
    return useObserver(() => {
        return (
            <div className="App">
                <header className="App-header">
                    <pre>
                {chat.messages.map(msg => `${msg.sender.displayName}: ${msg.text}\n(sent ${msg.sentTime})\n\n`)}
        </pre>
                    <input type="text" value={chat.currentMessage}
                           onChange={event => chat.updateMessage(event.target.value)}/>
                    <button onClick={() => chat.sendMessage()}>SEND</button>
                </header>
            </div>
        );

    });
}

export default App;

 */
