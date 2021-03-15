import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAshQ5YBmx_hiZWD7a3JYtpEw62_XDeqo8",
  authDomain: "piktask-361dd.firebaseapp.com",
  projectId: "piktask-361dd",
  storageBucket: "piktask-361dd.appspot.com",
  messagingSenderId: "356417729921",
  appId: "1:356417729921:web:c0d9eea67bdc0d98426480",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
