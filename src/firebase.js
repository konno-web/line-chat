import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA14X357q8pgYrCvet4VrmN64wLblMaI5c",
    authDomain: "line-clone-chat.firebaseapp.com",
    projectId: "line-clone-chat",
    storageBucket: "line-clone-chat.appspot.com",
    messagingSenderId: "672306615885",
    appId: "1:672306615885:web:3821eaee230294b1ba2e04",
    measurementId: "G-G97YN323X5"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };