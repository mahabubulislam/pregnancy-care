// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ugS5EboNSmE-X2-ORfMN2BAY44xw1FM",
  authDomain: "pregnancy-care-77a79.firebaseapp.com",
  projectId: "pregnancy-care-77a79",
  storageBucket: "pregnancy-care-77a79.appspot.com",
  messagingSenderId: "1050794428535",
  appId: "1:1050794428535:web:5fe7210b5349af90995e72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth