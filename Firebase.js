// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc16El7vIqXU98-dMP2nbCqg1N8TlN3Sg",
  authDomain: "medium-clone-a7b79.firebaseapp.com",
  projectId: "medium-clone-a7b79",
  storageBucket: "medium-clone-a7b79.appspot.com",
  messagingSenderId: "758108107511",
  appId: "1:758108107511:web:dce62d9a2d2449d04a59f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
