// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB23Z_CFa0tV1PNrvxK8n77mFdkiBT74FY",
  authDomain: "fir-teste-16333.firebaseapp.com",
  databaseURL: "https://fir-teste-16333-default-rtdb.firebaseio.com",
  projectId: "fir-teste-16333",
  storageBucket: "fir-teste-16333.firebasestorage.app",
  messagingSenderId: "1096202675387",
  appId: "1:1096202675387:web:a28e13290666d170def59e",
  measurementId: "G-8S29K4Z8KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;