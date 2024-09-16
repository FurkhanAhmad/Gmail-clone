// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8JpbkPQb1Wv1ty_o9Ge4qSX1QP15o5EY",
  authDomain: "clone-yt-edd96.firebaseapp.com",
  projectId: "clone-yt-edd96",
  storageBucket: "clone-yt-edd96.appspot.com",
  messagingSenderId: "71640484780",
  appId: "1:71640484780:web:6ecbdd254c6d4b45eac809",
  measurementId: "G-XG3Z7VZLGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app)

export const provider =new GoogleAuthProvider();