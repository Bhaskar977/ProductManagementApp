import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../Redux/Authentication/action';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("Login-Page",location)
  
  const loginHandler = () =>{
    let userData = {email,password};
    dispatch(login(userData)).then((res)=>{
      navigate("/")
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>E-mail</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button onClick={loginHandler}>LogIn</button>
    </div>
  );
}

export default Login;
