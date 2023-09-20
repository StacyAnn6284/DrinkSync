// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import dotenv from "dotenv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpXJyc5bUnHvqbwy75CHtxHY6VutCgIpA",
  authDomain: "drinksync-426f9.firebaseapp.com",
  projectId: "drinksync-426f9",
  storageBucket: "drinksync-426f9.appspot.com",
  messagingSenderId: "942051726415",
  appId: "1:942051726415:web:139fa2b781939f2a0e863a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// export { auth };
// export default firebase;

/* eslint-disable no-undef */
// The following line tells ESLint to consider 'firebase' as a global variable
/* global firebase */
