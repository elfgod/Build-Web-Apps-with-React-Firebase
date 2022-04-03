import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDZ91WFgoEaXCeAEkk1zhoLiDGXDL2SIQc',
  authDomain: 'thedojosite-ff9e8.firebaseapp.com',
  projectId: 'thedojosite-ff9e8',
  storageBucket: 'thedojosite-ff9e8.appspot.com',
  messagingSenderId: '363250451914',
  appId: '1:363250451914:web:124e89908535afff30bb33',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
