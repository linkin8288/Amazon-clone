import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSYMne22hNYZ35aj4Bppu_AtGCVrwACxs",
  authDomain: "clone-26e69.firebaseapp.com",
  projectId: "clone-26e69",
  storageBucket: "clone-26e69.appspot.com",
  messagingSenderId: "421961921065",
  appId: "1:421961921065:web:fc53980b06bb26cfe2a238",
  measurementId: "G-7VLWJQTDFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);