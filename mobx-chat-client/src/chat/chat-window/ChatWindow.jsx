import React from 'react';
import {useObserver} from "mobx-react-lite";
import {UserList} from "../users/display/UserList";
import {MessageEntry} from "./messages/entry/MessageEntry";
import {MessageDisplay} from "./messages/MessageDisplay";
import formatDate from "date-fns/format";


export const TimeDisplay = ({chatWindow}) => {
    return useObserver(()=>(
        <div>
            The current time is:  {formatDate(chatWindow.currentTime, 'pp')}
        </div>
        
    ))
};

export const ChatWindow = ({app}) =>{
    const chatWindow = app.chatWindow;
    const userManager = app.userManager;
    return useObserver(()=>(
        <div>
            <h1>Hello {userManager.currentUser.displayName}. Welcome to chat!</h1>
            <UserList userManager={app.userManager}/>
            <pre>
                {chatWindow.messages.map(msg => <MessageDisplay msg={msg} key={msg.key} />)}
            </pre>
            <MessageEntry model={chatWindow.messageEntry}/>
            <TimeDisplay chatWindow={chatWindow} />
            
        </div>
))
};


