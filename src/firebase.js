// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDie1kazulUImnJRDjBE68HhtnM0ZHXk7A",
  authDomain: "wheres-waldo-4fb4a.firebaseapp.com",
  projectId: "wheres-waldo-4fb4a",
  storageBucket: "wheres-waldo-4fb4a.appspot.com",
  messagingSenderId: "209353849388",
  appId: "1:209353849388:web:622ac737c5a47412de2f89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = app.auth();
export default app;