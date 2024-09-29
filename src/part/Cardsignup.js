import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import auth from "../firebase";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const Cardsignup = ({ setsnigin, setcard }) => {
  const [error, seterror] = useState(false);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const data = new Date().getTime();
  const navigate = useNavigate();
  return (
<>
   
      <div className="cardsingup">
    
        <h2>Create Anew Account</h2>
        {error && (
          <h2 style={{ color: "red" }}>برجاء التاكد من الاميل والباسورد</h2>
        )}
        <CloseIcon
          onClick={() => {
            setsnigin(true);
            setcard(false);
          }}
        />
        <form className="dadinput">
          <input
            type="Email"
            
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
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  updateProfile(auth.currentUser, {
                    displayName: data,
              
                  })
                    .then(() => {
                      setcard(false);
                      navigate('/Createtitle')
                    })
                   

                    .catch((error) => {});
                  const user = userCredential.user;
                })
                .catch((error) => {
                  seterror(true);
                });
            }}
          >
           
            Sign-up
          </button>
        </form>
      </div>
</>
  );
};

export default Cardsignup;
