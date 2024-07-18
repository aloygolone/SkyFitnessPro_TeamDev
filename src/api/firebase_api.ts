// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://spfitnesspro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

//"AIzaSyCkN4xe36J9U7gt-sOI3NmKzHpbVpMTcXE"
//"spfitnesspro.firebaseapp.com"
//"https://spfitnesspro-default-rtdb.europe-west1.firebasedatabase.app"
//"spfitnesspro"
//"spfitnesspro.appspot.com"
//"646527140879"
//"1:646527140879:web:9157e41fa4ab53e1fb4f7a"