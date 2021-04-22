import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBrO6Ljw0IG-1ctIsBWaRJJV0lbZEA9iFY",
    authDomain: "react-journal-app-3311c.firebaseapp.com",
    projectId: "react-journal-app-3311c",
    storageBucket: "react-journal-app-3311c.appspot.com",
    messagingSenderId: "168252467509",
    appId: "1:168252467509:web:2847ea576f12e13c49847c"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase }