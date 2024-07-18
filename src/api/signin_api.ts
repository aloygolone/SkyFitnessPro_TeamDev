import { signOut } from 'firebase/auth';
//import { useAppDispatch } from 'hooks/redux-hooks';
import React, { useContext, useEffect, useState } from 'react'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

type loginData = [
  email: string,
  password: string,
  user: null,
]

 const function Logout() {
  return signOut(auth)
}
export default function signinApi  ({email, password}:loginData) {

      const [createAccount, setCreateAccount] = useState(false)
      const [userCreds, setUserCreds] = useState({ email: '', password: '' })
  
      const { signUp, login } = useAuth()
  
      function updateEmail(e) {
          setUserCreds({ ...userCreds, email: e.target.value })
      }
  
      function updatePassword(e) {
          setUserCreds({ ...userCreds, password: e.target.value })
      }
  
      function handleSubmit(e) {
          e.preventDefault()
          // предотвращает регистрацию, если форма не заполнена
          if (!userCreds.email || !userCreds.password) { return }
  
          if (createAccount) {
              // рекомендуется добавить сюда проверку пароля с помощью регулярного выражения
              console.log('Registering')
              signUp(userCreds.email, userCreds.password)
          } else {
              console.log('Logging in')
              login(userCreds.email, userCreds.password)
          }
      }

  }
  

  /* 
    
      return (
          <div>
              <input placeholder='Email' value={userCreds.email} onChange={(e) => {
                  updateEmail(e)
              }}></input>
              <input placeholder='Password' type='password' value={userCreds.password} onChange={(e) => {
                  updatePassword(e)
              }}></input>
              <button onClick={handleSubmit}>
                  <p>Submit</p>
              </button>
              <button onClick={() => setCreateAccount(!createAccount)}>
                  <p>{createAccount ? 'Sign In' : 'Sign Up'}</p>
              </button>
          </div>
      ) */