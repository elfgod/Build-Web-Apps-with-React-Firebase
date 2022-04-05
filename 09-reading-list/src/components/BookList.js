import { db } from '../firebase/config'
// Instead of collection to get a reference to an specific collection, we can use
// doc to get a reference to a specific documents, we use this to update and delete
import { doc, deleteDoc } from 'firebase/firestore'

const BookList = ({ books }) => {
  const handleClick = async (id) => {
    // console.log(id)
    const ref = doc(db, 'books', id)
    await deleteDoc(ref)

    // Firebase documentation
    // await deleteDoc(doc(db, 'books', id)
  }

  return (
    <div className='book-list'>
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
