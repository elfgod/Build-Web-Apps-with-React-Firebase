import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  // If context doesnt have a value means,
  // it means we trying to use it outside the scope of the context
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider')
  }

  return context
}
