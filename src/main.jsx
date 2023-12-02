import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvu_Ct5r3hHcOVbJ9VI76582iMFQCTt7g",
  authDomain: "eccomerce-101da.firebaseapp.com",
  projectId: "eccomerce-101da",
  storageBucket: "eccomerce-101da.appspot.com",
  messagingSenderId: "965904073274",
  appId: "1:965904073274:web:2159816eef0ab14266eb03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)