// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwxc2LQQFGROF9QgNrrza1uSHKatFuO0k",
  authDomain: "giphy-46984.firebaseapp.com",
  projectId: "giphy-46984",
  storageBucket: "giphy-46984.firebasestorage.app",
  messagingSenderId: "528001829478",
  appId: "1:528001829478:web:c3933d6d2bc4427a567ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);