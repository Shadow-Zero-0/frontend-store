import React, { useState } from 'react';
import  auth, { db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore"; 
import {  ThreeDot } from "react-loading-indicators";
import { useNavigate } from 'react-router-dom';
const Createtitle = ({setx,setcreatetitle1}) => {
    const [user] = useAuthState(auth);
  const Navigate = useNavigate()
    const [loding, setloding] = useState();
    const [name, setname] = useState();
    const [Governoratename, setGovernoratename] = useState();
    const [Nameofthevillage, setNameofthevillage] = useState();
    const [Telephonenumber, setTelephonenumber] = useState();
    const arrinput = [
      {name:name},
      {Governoratename:Governoratename},
      {Nameofthevillage:Nameofthevillage},
      {Telephonenumber:Telephonenumber}
    
     
  ]

    return (
        <div className="dadcard ">
        <div className="dadinput">
          <h2 onClick={() => {
            
          
          }}>Create a title</h2>
                <input type='text' onChange={(eo) => {
                   setname(eo.target.value)
               }}  required placeholder='الاسم'/>
               <input type='text' onChange={(eo) => {
                   setGovernoratename(eo.target.value)
               }} required placeholder='اسم المحافظة'/>
               <input type='text' onChange={(eo) => {
                   setNameofthevillage(eo.target.value)
               }} required placeholder='اسم القرية'/>
               <input type='number' onChange={(eo) => {
                   setTelephonenumber(eo.target.value)
               }} required placeholder='رقم التلفون'/>
               <button onClick={async() => {
                setloding(true)
           
             
                await setDoc(doc(db, user.uid, user.displayName), {
                 
                  websites:arrinput,
                  id:user.displayName
                });  
                setloding(false)
                Navigate('/')
          
               }}>    {loding ? (
                <ThreeDot
                  color="#000000"
                  size="small"
                  text=""
                  textColor=""
                />
               
              ) : (
                " Create New Title"
              )}</button>
        </div>
         </div>
    );
}

export default Createtitle;
