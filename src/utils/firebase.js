// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCusYRo1YCu_W1xH7YGK7LIilBfb5vN2mQ",
  authDomain: "netflixgpt-950d1.firebaseapp.com",
  projectId: "netflixgpt-950d1",
  storageBucket: "netflixgpt-950d1.appspot.com",
  messagingSenderId: "543445801256",
  appId: "1:543445801256:web:ed87903fae0c98f54f581d",
  measurementId: "G-ZH76N5EGBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();