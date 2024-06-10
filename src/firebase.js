// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFDEKhyTSkkLH0lkNZpNtSAZ2rA8rWXsg",
  authDomain: "twitter-clone-b4adf.firebaseapp.com",
  projectId: "twitter-clone-b4adf",
  storageBucket: "twitter-clone-b4adf.appspot.com",
  messagingSenderId: "143597990836",
  appId: "1:143597990836:web:7a5cce7b9f271821b2f8e1",
  measurementId: "G-M35XTSXV26"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;