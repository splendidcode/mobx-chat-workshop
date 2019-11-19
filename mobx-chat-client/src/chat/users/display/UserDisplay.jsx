import React from 'react';
import {useObserver} from "mobx-react-lite";

export const UserDisplay = ({user}) => {
    return useObserver(()=>(
        <li>{user.displayName} {user.isTyping && <span>typing....</span>}</li>
    ));
};