import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/UserSlice";
import './login.css'
export const Login = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users.listofusers;
    })
    const [name, setname] = useState('');
    const [pwd, setpwd] = useState('');
    return (
        <div className="main">
            <div>Enter Name : </div>
            <input type="text" value={name} onChange={(event) => setname(event.target.value)} />
            <br /><br />
            <div>Enter Password : </div>
            <input type="password" value={pwd} onChange={(event) => setpwd(event.target.value)} />
            <br /><br />
            <button onClick={() => dispatch(addUser({ name: name, pwd: pwd }))}>Submit</button>
            {data.map((value, id) => (
                <p key={id}>{value.name}  {value.pwd}</p>
            ))}
        </div>
    )
}