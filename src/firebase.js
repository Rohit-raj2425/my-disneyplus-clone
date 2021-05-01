import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCVLvPLQ6yFyE6J_iUD6nIaPzB61g77jrA",
    authDomain: "disneyplus-clone-831d8.firebaseapp.com",
    projectId: "disneyplus-clone-831d8",
    storageBucket: "disneyplus-clone-831d8.appspot.com",
    messagingSenderId: "208439486096",
    appId: "1:208439486096:web:4a08e6cce1ac7564015a15",
    measurementId: "G-2P0R6YD19K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;  