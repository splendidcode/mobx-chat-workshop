import React from 'react';
import {useObserver} from "mobx-react-lite";

export const UserForm =  ({userManager}) => {
    return useObserver (()=>{
        const userForm = userManager.userForm;
        return (
            <form onSubmit={e=>e.preventDefault()}>
                <label>User Id: <input onChange={ e =>userForm.updateUserId(e.target.value)}/></label>
                <label>Display Name: <input onChange={ e =>userForm.updateDisplayName(e.target.value)}/></label>
                <button disabled={!userForm.isAllowedToSubmit} onClick={() => userManager.createCurrentUser(userForm)}>Submit</button>
                {userForm.errorMessage && (
                    <div>{userForm.errorMessage}</div>
                )}
            </form>
        );
    })
};

