import React, { useEffect } from 'react'

import {  useDispatch } from 'react-redux'

import {  onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { addUser, removeUser } from '../Utils/userSlice'

import { auth } from '../Utils/firebase'

const Body = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  
   
  return (
    <></>
  )
}

export default Body