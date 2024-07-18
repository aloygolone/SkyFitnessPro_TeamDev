import React from 'react'
import { addDoc, collection, doc, increment, serverTimestamp, setDoc } from "firebase/firestore";
import { useAuth } from './signin_api';
import { db } from './firebase_api';


const databaseURL = "https://spfitnesspro-default-rtdb.europe-west1.firebasedatabase.app"

export default function coursesApi() {
  const { logout, currentUser } = useAuth() // Получаем функцию logout и текущего пользователя из контекста аутентификации

  async function handleIncrement() {
      const userRef = doc(db, 'users', currentUser.uid); // Создаем ссылку на документ пользователя в базе данных
      await setDoc(userRef, { counter: increment(1), timestamp: serverTimestamp() }, { merge: true }); // Увеличиваем счетчик и устанавливаем метку времени в базе данных
  }

    // Добавляем запрос к базе данных для добавления данных в коллекцию
    const collectionRef = collection(db, 'logs'); // Создаем ссылку на коллекцию 'logs' в базе данных
    await addDoc(collectionRef, { action: 'increment', user: currentUser.uid, timestamp: serverTimestamp() }); // Добавляем запись о действии в коллекцию 'logs'
}

/* return (
  <div>
      <p> hello world & welcome to the dashboard</p>
      <button onClick={handleIncrement}>Increment database</button> // Кнопка для увеличения счетчика в базе данных 
      <button onClick={logout}>Logout</button> // Кнопка для выхода из учетной записи 
  </div>
) */


  /* приложения получает доступ к состоянию CurrentUser с помощью AuthContext 
  и условно отображает компоненты Dashboard или Login в зависимости от того, найден пользователь или нет. */
  const { currentUser } = useAuth()
  return (
    <div>
      {currentUser ? (
        <Dashboard />
      ) : (
        <Login />
      )}
    </div>
  )