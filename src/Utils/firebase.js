// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSCfj0YAKp5bi7i7fEIZJJMi9Adlo3Z_4",
  authDomain: "netflixgpt-efcfc.firebaseapp.com",
  projectId: "netflixgpt-efcfc",
  storageBucket: "netflixgpt-efcfc.appspot.com",
  messagingSenderId: "972593853040",
  appId: "1:972593853040:web:7331d4dc1fe0aa608a7ab5",
  measurementId: "G-LCPPZBFCL1"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);


//  export const auth = getAuth(app);
