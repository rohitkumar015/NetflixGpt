import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/Signup");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoUrl } = user;

        console.log(user.email);

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoUrl,
          })
        );
        navigate("/Browser");
      } else {
        dispatch(removeUser());
        navigate("/Login");
      }
    });
    // return()=> unsubscribe()
  },[]);

  return (
    <div>
      <header>
        <div className="flex justify-between">
          <div></div>
          <div>
            <button onClick={userOut} className="netflix_btn w_135px">
              Sign Out
            </button>
            <div className=""></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
