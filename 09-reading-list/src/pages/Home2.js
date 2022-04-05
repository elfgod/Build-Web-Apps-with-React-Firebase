import { useState, useEffect } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore'

const Home = () => {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    const ref = collection(db, 'books')

    getDocs(ref).then((snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setBooks(results)

      // Another way to do it
      // const books = snapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      // }))
      // setBooks(books)
    })
  }, [])

  return (
    <div className='App'>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  )
}

export default Home

// Another way to do it, firebase docs
// getDocs(collection(db, 'books'))
// .then((snapshot) => {
//   let results = []
//   snapshot.docs.forEach((doc) => {
//     results.push({
//       id: doc.id,
//       ...doc.data(),
//     })
//   })
//   setBooks(results)
