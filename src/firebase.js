import firebase from "firebase";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBgMoehA-073TnxCHYaexp4CwG0ci1Vi8s",
    authDomain: "technical-ticket-app.firebaseapp.com",
    projectId: "technical-ticket-app",
    storageBucket: "technical-ticket-app.appspot.com",
    messagingSenderId: "992067529631",
    appId: "1:992067529631:web:138f06e80eac32ea37abaa"
  });

  export const serverTime = firebase.firestore.FieldValue.serverTimestamp;
  export default app;