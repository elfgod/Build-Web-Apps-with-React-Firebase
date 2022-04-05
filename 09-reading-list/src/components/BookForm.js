import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
// firebase imports
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const BookForm = () => {
  const [newBook, setNewBook] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(newBook)
    await addDoc(collection(db, 'books'), {
      // Adding the new book to the database
      // newBook is the value of the input the user types in
      title: newBook,
      // Adding the user's id to the book's author field
      uid: user.uid,
    })
    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type='text'
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  )
}

export default BookForm
