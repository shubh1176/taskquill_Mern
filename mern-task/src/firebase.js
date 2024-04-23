// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-task-4954b.firebaseapp.com",
  projectId: "mern-task-4954b",
  storageBucket: "mern-task-4954b.appspot.com",
  messagingSenderId: "1064620758525",
  appId: "1:1064620758525:web:1e6a73cac4d13f4da43594"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

