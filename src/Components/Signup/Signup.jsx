import React, { useRef } from 'react';
import './signup.css';
import { useAuth } from '../../Context/AuthContext';
export default function Signup() {
    let {createUser} = useAuth();
    let emailRef = useRef();
    let passwordRef = useRef()
    console.log();
    function handelSubmit(e){
        e.preventDefault();
        //Add validation funtion here
        if(true){

           createUser(emailRef.current.value, passwordRef.current.value).then(e=>{
               //code to execute after signup
        });   
            
        }else{
            
        }
        
    }
  return (
      <div className="signup">
          <form action="submit">
            <h1>Signup</h1>
            
            <div className="formInput">
                <label htmlFor="email">Email</label>
                <input name="email" ref={emailRef} type="email" />
            </div>
            <div className="formInput">
                <label htmlFor="password">Password</label>
                <input name="password" ref={passwordRef} type="password" />
            </div>

            <button onClick={handelSubmit}>Create Account</button>

          </form>
      </div>
  );
}
