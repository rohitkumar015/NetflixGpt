import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearch } from "../Utils/gptSlice";

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

  // handle gpt search
  
  const gptDispatch=useDispatch()
  const handleGptsearch=()=>{
   gptDispatch(toggleGptSearch())

  }
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
      <header className="bg-black ">
        <div className="container bg-black d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4 align-items-center">
            <img src="/assests/logo/logonet.png" width={80} alt="" />
            <div>
              <ul className="list-unstyled d-flex gap-4 m-0 align-items-cneter">
                <li className="text_orange">Home</li>
                <li className="text_orange">Movies</li>
                <li className="text_orange">About</li>
                <li className="text_orange">Contact</li>
              </ul>
            </div>
          </div>
          {/* <div>
            <button onClick={userOut} className="netflix_btn w_135px">
              Sign Out
            </button>
            
          </div> */}
          <div>
            <button onClick={handleGptsearch} className="netflix_btn w_135px">
              GPT Search
            </button>
            
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
