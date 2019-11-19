import React from 'react';
import {useObserver} from "mobx-react-lite";

export const UserForm =  ({userManager}) => {
    const userForm = userManager.userForm;
    return (
        <form onSubmit={e=>e.preventDefault()}>
            <label>User Id: <input/></label>
            <label>Display Name: <input/></label>
            <button>Submit</button>
        </form>
    );
};

