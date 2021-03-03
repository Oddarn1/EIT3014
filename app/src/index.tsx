import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyArjcsYVjwVtChh1u3JG8Hd__csHjnNPx0",
  authDomain: "eit3014.firebaseapp.com",
  databaseURL: "https://eit3014-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eit3014",
  storageBucket: "eit3014.appspot.com",
  messagingSenderId: "474021912928",
  appId: "1:474021912928:web:ef2c9b800974c317ab3e05",
  measurementId: "G-MDSHPBCC3Y"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <App />
    </FirebaseDatabaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
