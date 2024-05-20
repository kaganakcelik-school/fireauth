// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-auth-9af39.firebaseapp.com",
  projectId: "fir-auth-9af39",
  storageBucket: "fir-auth-9af39.appspot.com",
  messagingSenderId: "435848954602",
  appId: "1:435848954602:web:3fd11679050d3ec5ae0d93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);