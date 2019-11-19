import React from 'react';
import {useObserver} from "mobx-react-lite";
import {UserForm} from "./users/edit/UserForm";


export const ChatApplication = ({app}) =>{
    return useObserver(()=>(
        app.currentView === 'userForm'
            ? <UserForm userManager={app.userManager}/>
            : <div>{app.userManager.numUsers} user(s). Current user is {app.userManager.currentUser.displayName}</div>
    ));
};

