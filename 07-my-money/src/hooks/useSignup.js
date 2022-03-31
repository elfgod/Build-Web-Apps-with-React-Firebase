import { useState } from 'react'
import { projectAuth } from '../firebase/config'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  // Firebase lets us save certain props like displayName, photoURL, email, etc.
  const signup = async (email, password, displayName) => {}
}
