import { useState, useEffect, useRef } from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // This helps us avoid re-fetching the data when the query changes
  // If we don't use  a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    // Tacking on to the ref of the collection
    if (query) {
      ref = ref.where(...query)
    }
    if (orderBy) {
      // orderBy is an array thats why we rap it in in a useRef
      // This func takes 2 arguments
      // [properties as string, ascending or descending]
      ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = []
        snapshot.docs.forEach((doc) => {
          console.log(doc)
          results.push({ ...doc.data(), id: doc.id })
        })

        // update state
        setDocuments(results)
        setError(null)
      },
      (error) => {
        console.log(error)
        setError('could not fetch documents')
      }
    )

    // unsubscribe on unmount
    return () => unsubscribe()
  }, [collection, query, orderBy])

  return { documents, error }
}
