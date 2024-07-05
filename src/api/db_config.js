// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkN4xe36J9U7gt-sOI3NmKzHpbVpMTcXE",
  authDomain: "spfitnesspro.firebaseapp.com",
  databaseURL: "https://spfitnesspro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "spfitnesspro",
  storageBucket: "spfitnesspro.appspot.com",
  messagingSenderId: "646527140879",
  appId: "1:646527140879:web:9157e41fa4ab53e1fb4f7a"
};
//apiKey:ключ API проекта. Используется для аутентификации приложения при взаимодействии с Firebase.
//authDomain: домен аутентификации проекта. Используется для настройки аутентификации и авторизации пользователей.
//databaseURL: URL базы данных проекта. Используется для доступа к базе данных Firebase Realtime Database.
//projectId: идентификатор проекта. Используется для идентификации проекта в Firebase.
//storageBucket: хранилище проекта. Используется для хранения и обработки файлов, таких как изображения или видео.
//messagingSenderId: идентификатор отправителя сообщений проекта Firebase. Используется для настройки функциональности отправки уведомлений и сообщений.
//appId: идентификатор приложения. Используется для идентификации в Firebase.


// Initialize Firebas e
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);