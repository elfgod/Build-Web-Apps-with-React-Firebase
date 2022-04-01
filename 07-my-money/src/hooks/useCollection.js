import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    const unsubscribe = ref.onShapshot(
      (snapshot) => {
        let results = []
        snapshot.forEach((doc) => {
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
  }, [collection])

  return { documents, error }
}
