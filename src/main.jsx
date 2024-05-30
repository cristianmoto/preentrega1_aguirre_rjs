import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUh45bcwUD_WxobHqJCQpvdDHGARa-_lo",
  authDomain: "finalrjs.firebaseapp.com",
  projectId: "finalrjs",
  storageBucket: "finalrjs.appspot.com",
  messagingSenderId: "90004230550",
  appId: "1:90004230550:web:78bd0ffc25c253841c8db7",
  measurementId: "G-31R62M90ZK"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
