import React, { useEffect } from 'react'

import {  useDispatch } from 'react-redux'

import {  onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../Utils/userSlice'

import { auth } from '../Utils/firebase'

const Body = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
  
   
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const { uid, email, displayName, } = user;
       
        console.log(user.email)
       
        dispatch(addUser({uid: uid, email:email, displayName:displayName}))
        navigate('/Browser')
      } else {
        dispatch(removeUser())
        navigate('/Login')
      }
    });
  },[]);
   
  return (
    <></>
  )
}

export default Body