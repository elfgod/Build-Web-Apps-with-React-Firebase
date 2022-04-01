import { useEffect } from 'react'

import { createContext, useReducer } from 'react'
import { projectAuth } from '../firebase/config'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  })

  useEffect(() => {
    // This method fires when the user is logged in
    // Only once when we first comunicate with firebase
    // To check the user to begin with, on reload
    // Everytime there is a change in the user Auth, logout
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user })
      unsub()
    })
  }, [])

  console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
