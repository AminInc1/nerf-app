// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7NVpIyGwHjb007IKL8DJy_bxdn8-K62I",
  authDomain: "aula-1c0de.firebaseapp.com",
  projectId: "aula-1c0de",
  storageBucket: "aula-1c0de.appspot.com",
  messagingSenderId: "169977210142",
  appId: "1:169977210142:web:5763e188ed06f73406950f",
  measurementId: "G-LMGHPBBZTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);