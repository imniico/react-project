import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Inicio Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDonBIs5cg-qkB8w9Q9AuNcPvzrplG6UrU",
  authDomain: "react-project-1911.firebaseapp.com",
  projectId: "react-project-1911",
  storageBucket: "react-project-1911.appspot.com",
  messagingSenderId: "736973481208",
  appId: "1:736973481208:web:ad41e39ac347317947470d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Fin Firebase

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
