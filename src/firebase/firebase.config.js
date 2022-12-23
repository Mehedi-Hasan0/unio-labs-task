// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuCHwcUzcR6Cow8QZrkxT0RyhMJy8hwzo",
    authDomain: "unio-labs.firebaseapp.com",
    projectId: "unio-labs",
    storageBucket: "unio-labs.appspot.com",
    messagingSenderId: "1045911865901",
    appId: "1:1045911865901:web:85f5d5ff91da68917d46a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;