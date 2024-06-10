// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDrq1B-au4eXc8mzhKNDnGZ57nSuy6-QEM",
    authDomain: "twitter-clone-b7ca4.firebaseapp.com",
    projectId: "twitter-clone-b7ca4",
    storageBucket: "twitter-clone-b7ca4.appspot.com",
    messagingSenderId: "362672449622",
    appId: "1:362672449622:web:1801aa66cc6fbe661873f7",
    measurementId: "G-6DS940EQ86"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;