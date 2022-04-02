import { useReducer, useState, useEffect } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, success: false, error: null }
    case 'ADDED_DOCUMENT':
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      }
    case 'DELETED_DOCUMENT':
      return {
        isPending: false,
        document: null,
        success: true,
        error: null,
      }
    case 'ERROR':
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      }
    default:
      return state
  }
}

// Adding a Collection, accepting it as an argument
// and not have to call it inside the function
// We make the hook more reusable
export const useFirestore = (collection) => {
  // Response is the state reprensents the data that comes from firestore
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // conllection ref
  const ref = projectFirestore.collection(collection)

  // Only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  // Add a document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDocument = await ref.add({ ...doc, createdAt })
      dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: err.message })
    }
  }

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' })

    try {
      await ref.doc(id).delete()
      dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT' })
    } catch (err) {
      dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete' })
    }
  }

  // Clean up func
  // This func is gone fire once when the component
  // that uses this hook first mounts the DOM
  // Its never gone run again because we have an empty dependecy array
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { addDocument, deleteDocument, response }
}
