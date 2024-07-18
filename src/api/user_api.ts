import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { auth} from '../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = React.createContext()
  
export function useAuth() {
    // Создание хука useAuth для доступа к контексту во всем приложении
    return useContext(AuthContext)
}

type loginUserApi = [
  email: string,
  password: string,
]
export default function userApi({ children }) {

      // Создаем компонент-обертку auth для приложения.
      // Можем опционально определить состояние userData и добавить в контекст.
      const [currentUser, setCurrentUser] = useState(null) // Создаем состояние currentUser и инициализируем его значением null
      //const [loading, setLoading] = useState(true) // Добавьте состояние loading и надо гзатем использовать (/ Создаем состояние loading и инициализируем его значением true)
  

      /* Мы также определяем функции signup, login и logout, которые используют 
      соответствующие функции из модуля firebase/auth для выполнения операций аутентификации. */
      // Функция для регистрации нового пользователя
      function signup(email, password) {
          return createUserWithEmailAndPassword(auth, email, password) 
      }
  
      // Функция для входа пользователя
      function login(email, password) {
          return signInWithEmailAndPassword(auth, email, password)
      }
  
      // Функция для выхода пользователя
      function logout() {
          return signOut(auth)
      }


      useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, user => {
              // Здесь можно получить общие данные о пользователях из Firebase
              setCurrentUser(user)   // Устанавливаем текущего пользователя в состояние currentUser
              setLoading(false) // Устанавливаем loading в false после получения данных о пользователе
          })
          return unsubscribe // Возвращаем функцию отписки от изменений состояния аутентификации
      }, [])
  

      /* Затем мы создаем объект value, который содержит текущего пользователя и функции аутентификации, и передаем его в провайдер контекста AuthContext.Provider. 
      Мы также проверяем, завершена ли загрузка данных (!loading), прежде чем рендерить дочерние компоненты. */
      const value = {
          currentUser,
          signup,
          logout,
          login
      }
  
      return (
          <AuthContext.Provider value={value}>
              {children}
          </AuthContext.Provider>
      )
}
