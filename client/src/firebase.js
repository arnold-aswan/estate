// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-82197.firebaseapp.com",
  projectId: "mern-estate-82197",
  storageBucket: "mern-estate-82197.appspot.com",
  messagingSenderId: "919129709028",
  appId: "1:919129709028:web:d332a05a0690674e028ff1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
