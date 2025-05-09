// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo0RZehZDeP6vEuSgDRjm-edhqTfmIFRc",
  authDomain: "marigold-238bb.firebaseapp.com",
  projectId: "marigold-238bb",
  storageBucket: "marigold-238bb.appspot.com",
  messagingSenderId: "629795023224",
  appId: "1:629795023224:web:a10efeb36f3ef91832c08d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
