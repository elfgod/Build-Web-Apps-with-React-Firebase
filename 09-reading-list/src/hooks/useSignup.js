import { useState } from 'react'

// firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
  const [error, setError] = useState(null)

  const signup = (email, password) => {
    setError(null) // reset the user to error every time we try to signup a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('user signed up: ', res.user)
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return { error, signup }
}
