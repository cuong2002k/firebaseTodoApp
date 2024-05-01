// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCpieHR3s0tNEOTa0UzVBCeZBXq95zwk58",
  authDomain: "demologin-91e69.firebaseapp.com",
  projectId: "demologin-91e69",
  storageBucket: "demologin-91e69.appspot.com",
  messagingSenderId: "1000645060691",
  appId: "1:1000645060691:web:60e588b81e17eb808afea6",
  measurementId: "G-2R3NHK4RSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { db, auth }