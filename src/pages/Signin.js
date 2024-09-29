import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cardsignup from "../part/Cardsignup";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

import "../index.css";
import { useAuthState } from "react-firebase-hooks/auth";

const Signin = () => {
  const navigate = useNavigate();
  const [error0, seterror0] = useState(false);
  const [user] = useAuthState(auth);
  const [card, setcard] = useState(false);
  const [snigin, setsnigin] = useState(true);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
 useEffect(() => {
  if(user){
    navigate('/')
  }
 
 }, );
  return (


       <div  className="dadcard ">
      {card && <Cardsignup setcard={setcard} setsnigin={setsnigin} />}

      {snigin && (
        <>
          <h2>
            Create Anew Account
            <Link
              onClick={() => {
                setcard(true);
                setsnigin(false);
              }}
            >
              Sing-up
            </Link>
          </h2>
          {error0 && (
            <h2 style={{ color: "red" }}>برجاء التاكد من الاميل والباسورد</h2>
          )}
          <form className="dadinput">
            <input
              type="Email"
              style={{ width: "135%" }}
              required
              placeholder="Email"
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
            />

            <input
              type="password"
              required
              placeholder="Password"
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
            />
            <button
              onClick={(eo) => {
                eo.preventDefault();
                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {})
                  .catch((error) => {
                    seterror0(true);
                  });
              }}
            >
              Sing-in
            </button>
          </form>
        </>
      )}
    </div>


  );
};

export default Signin;
