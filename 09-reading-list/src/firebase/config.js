// Firebase 9
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBcqpxUlZrAMEr_Kb5WPmChyfVWx9FsXsg',
  authDomain: 'readinglistapp-684bc.firebaseapp.com',
  projectId: 'readinglistapp-684bc',
  storageBucket: 'readinglistapp-684bc.appspot.com',
  messagingSenderId: '416342054902',
  appId: '1:416342054902:web:9a36ab25ddd0967385d9d7',
}

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

export { db }
