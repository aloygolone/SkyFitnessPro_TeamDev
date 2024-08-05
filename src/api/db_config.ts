import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAKIlR2BLmRIwIiqf2YeuMl5K4b4fzNoIQ",
  authDomain: "skyfpteamdev.firebaseapp.com",
  databaseURL:
    "https://skyfpteamdev-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyfpteamdev",
  storageBucket: "skyfpteamdev.appspot.com",
  messagingSenderId: "856837046271",
  appId: "1:856837046271:web:96d5f919d8c9773227f1ca",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
