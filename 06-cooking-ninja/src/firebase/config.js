// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4urrPoIEuxf9Hf9pByz3eUJ3Kd1R7WdU',
  authDomain: 'cooking-ninja-site-5119b.firebaseapp.com',
  projectId: 'cooking-ninja-site-5119b',
  storageBucket: 'cooking-ninja-site-5119b.appspot.com',
  messagingSenderId: '872283541621',
  appId: '1:872283541621:web:69aed4138d980e22fce83c',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Cloud Firestore through Firebase
const projectFirestore = firebase.firestore()

export { projectFirestore }
