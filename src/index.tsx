import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: 'AIzaSyBjDQ6fFDprSDmcjLtfd1Bl1s3H8oD5B80',
  authDomain: 'messenger-web-325c4.firebaseapp.com',
  projectId: 'messenger-web-325c4',
  storageBucket: 'messenger-web-325c4.appspot.com',
  messagingSenderId: '625036047895',
  appId: '1:625036047895:web:b8c6be1f83508148950e52',
  measurementId: 'G-FG6TC7E0QV'
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
