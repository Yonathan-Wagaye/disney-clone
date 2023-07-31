import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBUnDQqLPTpI-PzV22Hf8Yoe5MKExQOAWI",
    authDomain: "disney-clone-cc9cd.firebaseapp.com",
    projectId: "disney-clone-cc9cd",
    storageBucket: "disney-clone-cc9cd.appspot.com",
    messagingSenderId: "935783113354",
    appId: "1:935783113354:web:2ed78ce3720105674e0373",
    measurementId: "G-9B6NDLKKNL"
  };

  const firebaseApp = firebase.initalizeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider  = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, storage, provider};

  export default db;
