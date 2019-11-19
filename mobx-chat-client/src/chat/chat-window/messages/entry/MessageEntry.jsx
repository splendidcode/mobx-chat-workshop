import React from 'react';
import {useObserver} from "mobx-react-lite";


export const MessageEntry = ({model}) =>{
    return useObserver(()=>(
        <form onSubmit={e=>e.preventDefault()}>
            <input type="text" value={model.currentMessage}
                   onChange={event => model.updateMessage(event.target.value)}/>
            <button onClick={() => model.sendMessage()}>SEND</button>
        </form>
    ));
};