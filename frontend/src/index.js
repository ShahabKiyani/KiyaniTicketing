import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//firebase stuff:
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE9HH1m70RIiRjqB5RNdU5ku-SzzisGWs",
  authDomain: "ticketingapplication-c2d48.firebaseapp.com",
  projectId: "ticketingapplication-c2d48",
  storageBucket: "ticketingapplication-c2d48.appspot.com",
  messagingSenderId: "318289636357",
  appId: "1:318289636357:web:3f68acc3718f322d00006c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
