import React from 'react'
import {useObserver} from "mobx-react-lite";


export const UserForm = ({userManager}) => {
    const form = userManager.userForm;
    return useObserver(()=>(
       <form onSubmit={e=>e.preventDefault()}>
           <label>UserId: <input value={form.userId} onChange={e => form.updateUserId(e.target.value)}/></label>
           <label>Display Name: <input value={form.displayName} onChange={e => form.updateDisplayName(e.target.value)}/></label>
           <button onClick={()=>userManager.createCurrentUser(form)} disabled={!form.isAllowedToSubmit}>Submit</button>
           {form.errorMessage && (
               <div>{form.errorMessage}</div>
           )}
       </form> 
    ));
};




