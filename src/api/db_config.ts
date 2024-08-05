import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD535qvIi964HjwG67c_GrEcid4LGJB4ZY",
  authDomain: "skyfitnesspro-13b90.firebaseapp.com",
  databaseURL:
    "https://skyfitnesspro-13b90-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skyfitnesspro-13b90",
  storageBucket: "skyfitnesspro-13b90.appspot.com",
  messagingSenderId: "601960710943",
  appId: "1:601960710943:web:a0ea1c7c6e01a3dd7b662a",
  measurementId: "G-DBNNNGMNNG",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
