import React, { useRef } from 'react';
import { useAuth } from '../../Context/AuthContext';
import {collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase';
export default function Dashboard() {
  //create refs for input
  let emailRef = useRef();
  let passwordRef = useRef();

  //event handler for submit button
  async function handelSubmit(e){
    //prevent page from redirecting
    e.preventDefault();

    console.log(emailRef.current.value, passwordRef.current.value);
    
    try {
      //creates collection if it doesnt exisits or uses the current collection if it exists .
      const docRef = await addDoc(collection(db, "users"), {
        //fields to be added in document
        email:emailRef.current.value ,
        password:passwordRef.current.value
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }
  return (
    <div className="dashboard">
        <h2>Dashboard</h2>

        <form action="">
          <input type="text" ref={emailRef} />
          <input type="password" ref={passwordRef} />
          <button onClick={handelSubmit}>Submit</button>
        </form>
    </div>
  );

}
