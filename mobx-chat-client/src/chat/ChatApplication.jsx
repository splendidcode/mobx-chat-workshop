import React from 'react'
import {useObserver} from "mobx-react-lite";
import {ChatWindow} from "./chat-window/ChatWindow";
import {UserForm} from "./users/edit/UserForm";



export const ChatApplication = ({app}) => {
    return useObserver( () => app.currentView === 'userForm' 
            ? <UserForm userManager={app.userManager}/>
            : <ChatWindow app={app}/>);
};
