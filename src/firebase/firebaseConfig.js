// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3W3iuMwA2wC0h7ilbNouuGB6UqkDo9a4",
  authDomain: "tanitabeer-5faf5.firebaseapp.com",
  projectId: "tanitabeer-5faf5",
  storageBucket: "tanitabeer-5faf5.appspot.com",
  messagingSenderId: "977021158935",
  appId: "1:977021158935:web:78d10931fb73edfd9a3e52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
