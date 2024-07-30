import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCUepvc2q7KR5qk8MChCAU-J0aZhS0-zFQ",
  authDomain: "skyfitnessproteamdev.firebaseapp.com",
  databaseURL:
    "https://skyfitnessproteamdev-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyfitnessproteamdev",
  storageBucket: "skyfitnessproteamdev.appspot.com",
  messagingSenderId: "53313572858",
  appId: "1:53313572858:web:e2fdbf634545a1deca9e43",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
