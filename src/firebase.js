import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"

var firebaseConfig = {
  apiKey: "AIzaSyC9P1eTHKrNCndBnLzMbc_4ogyxM96j-io",
  authDomain: "myapplication-2ca64.firebaseapp.com",
  databaseURL: "https://myapplication-2ca64.firebaseio.com",
  projectId: "myapplication-2ca64",
  storageBucket: "myapplication-2ca64.appspot.com",
  messagingSenderId: "830621214130",
  appId: "1:830621214130:web:e458b3ffd6f4579bc5b0ab",
  measurementId: "G-101CFL3T8M"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const store = firebaseApp.storage()
export {db, store} 
firebaseApp.analytics;