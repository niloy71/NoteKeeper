import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCQa0-2B3IJ3rbEm85ofdJRphJiHy8tmlg",
  authDomain: "note-using-reactjs.firebaseapp.com",
  projectId: "note-using-reactjs",
  storageBucket: "note-using-reactjs.appspot.com",
  messagingSenderId: "1030111277365",
  appId: "1:1030111277365:web:f0d45ab9f5982a19899c7c",
  measurementId: "G-RWL81DYS66"
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);
firebase.default.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('notekeeper-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
