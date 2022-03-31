import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import styles from './Signup.module.css'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  // We dont pass any arguments to the hook itself, only into the signup function when we call it
  const { signup, error, isPending } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
    signup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>sign up</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className='btn'>Sign up</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signup
