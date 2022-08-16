import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdFZCYk2PLARuAY53X-FYdLVgKVJZlRrU",
  authDomain: "house-marketplace-5794c.firebaseapp.com",
  projectId: "house-marketplace-5794c",
  storageBucket: "house-marketplace-5794c.appspot.com",
  messagingSenderId: "541953487974",
  appId: "1:541953487974:web:962fdbc4e6f0b287bea9a7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
