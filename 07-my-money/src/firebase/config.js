import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmRup97uxr8yOI2HfDj5cvKmNv5DK7E4s',
  authDomain: 'mymoney-9ce95.firebaseapp.com',
  projectId: 'mymoney-9ce95',
  storageBucket: 'mymoney-9ce95.appspot.com',
  messagingSenderId: '453990432258',
  appId: '1:453990432258:web:9a5b9ad03a6faf83a5311b',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
