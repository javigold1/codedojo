import React, { useState } from 'react';

import axios from 'axios';

export default () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>console.log("Response: ", res))
            .catch(err=>console.log("Error: ", err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label>
                <input type = "text" onChange={e=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label>
                <input type = "text" onChange={e=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <input type="submit" />
        </form>
    )
}