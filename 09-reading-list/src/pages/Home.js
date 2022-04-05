import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection'

const Home = () => {
  const { documents: books } = useCollection('books')

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
