import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB8VSr8-nmtsrKYb6JJBbqeBm4-XkPW6xc",
  authDomain: "live-chat-f1930.firebaseapp.com",
  projectId: "live-chat-f1930",
  storageBucket: "live-chat-f1930.appspot.com",
  messagingSenderId: "328312231138",
  appId: "1:328312231138:web:6578e40cfdaefaeb31fabb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
