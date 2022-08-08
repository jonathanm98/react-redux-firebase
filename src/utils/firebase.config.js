import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crud-firebase-f4f09.firebaseapp.com",
  projectId: "crud-firebase-f4f09",
  storageBucket: "crud-firebase-f4f09.appspot.com",
  messagingSenderId: "653370662774",
  appId: "1:653370662774:web:91cfa7c719051a5213a457",
});

export const auth = app.auth();
export default app;
