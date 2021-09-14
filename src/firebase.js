import firebase from "firebase/app";
import "firebase/auth"; // for authentication
import "firebase/firestore"; // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyB23dOlIYmnJfxZzAnHw-I38l0SdxnaStI",
  authDomain: "facebook-clone-27c51.firebaseapp.com",
  projectId: "facebook-clone-27c51",
  storageBucket: "facebook-clone-27c51.appspot.com",
  messagingSenderId: "808880121723",
  appId: "1:808880121723:web:af35da96c10dae72edbfde",
  measurementId: "G-7Y9Y94VNJS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
