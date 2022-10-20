// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBunElzt-xrR0i9NPQCHKL9TEoeM9VSXw",
  authDomain: "react-auth-dragon-news.firebaseapp.com",
  projectId: "react-auth-dragon-news",
  storageBucket: "react-auth-dragon-news.appspot.com",
  messagingSenderId: "350339663882",
  appId: "1:350339663882:web:97d5bafb093763b17fb7f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
