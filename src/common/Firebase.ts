// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSpIUg7-KzTwZznXCl1YIMpwCmo1n4tUU",
  authDomain: "file-drive-619f3.firebaseapp.com",
  projectId: "file-drive-619f3",
  storageBucket: "file-drive-619f3.appspot.com",
  messagingSenderId: "1087682408229",
  appId: "1:1087682408229:web:cfca30e6f12c33c0e034cc",
  measurementId: "G-VR83L3Z404",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
