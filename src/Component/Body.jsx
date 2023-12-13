import React, { useEffect } from 'react'
import Browser from './Browser'
import { Provider, useDispatch } from 'react-redux'
import appStore from '../Utils/appStore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../Utils/userSlice'
import Header from './Header'

const Body = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    const auth = getAuth();
   
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,emailVerified } = user;
        console.log(user.email)
       
        dispatch(addUser({uid: uid, email:email, displayName:displayName}))
        navigate('/Browser')
      } else {
        dispatch(removeUser())
        navigate('/Login')
      }
    });
  });
   
  return (
    <Provider store={appStore}>
   <Header></Header>
  </Provider>
  )
}

export default Body