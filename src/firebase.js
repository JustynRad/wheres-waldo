import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDie1kazulUImnJRDjBE68HhtnM0ZHXk7A",
  authDomain: "wheres-waldo-4fb4a.firebaseapp.com",
  projectId: "wheres-waldo-4fb4a",
  storageBucket: "wheres-waldo-4fb4a.appspot.com",
  messagingSenderId: "209353849388",
  appId: "1:209353849388:web:622ac737c5a47412de2f89"
});

export const firestore = getFirestore();
