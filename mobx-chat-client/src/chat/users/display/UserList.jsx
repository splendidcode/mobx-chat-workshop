import React from 'react'
import {useObserver} from "mobx-react-lite";
import {UserDisplay} from "./UserDisplay";


export const UserList = ({userManager}) => {
    return useObserver(()=>(
        <div>
            <h4>{userManager.numUsers} user(s) online:</h4>
            <ul>
                {userManager.users.map( user =><UserDisplay user={user} key={user.id}/>)}
            </ul>
        </div>
        
    ));
    
}
    