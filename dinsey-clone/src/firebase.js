import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import { GoogleAuthProvider,getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUnDQqLPTpI-PzV22Hf8Yoe5MKExQOAWI",
    authDomain: "disney-clone-cc9cd.firebaseapp.com",
    projectId: "disney-clone-cc9cd",
    storageBucket: "disney-clone-cc9cd.appspot.com",
    messagingSenderId: "935783113354",
    appId: "1:935783113354:web:2ed78ce3720105674e0373",
    measurementId: "G-9B6NDLKKNL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = getAuth();
  const provider  = new GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, storage, provider};

  export default db;
