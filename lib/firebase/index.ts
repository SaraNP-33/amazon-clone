// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIlXQ-y54h6B66_CjgcdMgDuizx9wPopM",
  authDomain: "clone-ddc30.firebaseapp.com",
  projectId: "clone-ddc30",
  storageBucket: "clone-ddc30.appspot.com",
  messagingSenderId: "600382447973",
  appId: "1:600382447973:web:666fe1e42c9a9115f2c18c",
  measurementId: "G-L09QNMSVG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)