import React, { useRef } from 'react';
import './login.css';
import { useAuth } from '../../Context/AuthContext';
export default function Login() {
    let {authenticateUser} = useAuth();
    let emailRef = useRef();
    let passwordRef = useRef()
    console.log();
    function handelSubmit(e){
        e.preventDefault();
        //Add validation funtion here
        if(true){

           authenticateUser(emailRef.current.value, passwordRef.current.value).then(e=>{
               //code to execute after login
           });   
            
        }else{
            
        }
        
    }
  return (
      <div className="login">
          <form action="submit">
            <h1>login</h1>
            {}
            <div className="formInput">
                <label htmlFor="email">Email</label>
                <input name="email" ref={emailRef} type="email" />
            </div>
            <div className="formInput">
                <label htmlFor="password">Password</label>
                <input name="password" ref={passwordRef} type="password" />
            </div>

            <button onClick={handelSubmit}>Login</button>

          </form>
      </div>
  );
}
