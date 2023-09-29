import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import "./Forms.css";

const Forms=()=>{
    const [cookies, setCookie,removeCookie] = useCookies(['user']);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      setCookie('user', email, { path: '/' });
      setCookie('user', password, { path: '/' });
    };
    const handleLogout = () => {
        removeCookie('user', { path: '/' });
      };
    return (
      <>
      <div className="container">
      <div className="form-body">
        {cookies.user ? <h1><span style={{color:"red"}}>Welcome</span>, {cookies.user}!</h1> : <h1>Please log in.</h1>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <div className="buttons">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      </div>
      </>
    );
 };

export default Forms;