import {useObserver} from "mobx-react-lite";
import React from "react";

export const MessageDisplay = ({msg})=> {
    return useObserver(()=>(
        <>
            { `${msg.sender.displayName}: ${msg.text}\n(sent ${msg.sentTime} ago)\n\n`}
        </>
    ));
};
