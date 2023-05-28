// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsY5_TGdZUi7bD7tGezmzhniz1tGeu4yY",
  authDomain: "griffin-ca510.firebaseapp.com",
  projectId: "griffin-ca510",
  storageBucket: "griffin-ca510.appspot.com",
  messagingSenderId: "506181951655",
  appId: "1:506181951655:web:fed0b364121063c66e3b82",
  measurementId: "G-DYTNKQG0BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };