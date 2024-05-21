// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBmiU6cG_H9asqlHLo0WUGvJYsBwNPhRU",
  authDomain: "shop-9fc8d.firebaseapp.com",
  projectId: "shop-9fc8d",
  storageBucket: "shop-9fc8d.appspot.com",
  messagingSenderId: "257190288948",
  appId: "1:257190288948:web:4cae544780acb75e253461",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Passed the app instance to getFirestore

export { auth, db };
