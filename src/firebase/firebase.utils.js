import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// ===============================================================
// refer these docs https://firebase.google.com/docs/auth/web/google-signin 
// ===============================================================

const config = {
    apiKey: "AIzaSyAGH5dSi-VhUNnqrHiTx3x5VHDvFcWAHrY",
    authDomain: "curatedcart-63cc7.firebaseapp.com",
    databaseURL: "https://curatedcart-63cc7.firebaseio.com",
    projectId: "curatedcart-63cc7",
    storageBucket: "curatedcart-63cc7.appspot.com",
    messagingSenderId: "46880487892",
    appId: "1:46880487892:web:61d9f73f7b1c5cb9427e41",
    measurementId: "G-H85HLYQGBB"
}

firebase.initializeApp(config)

export const auth = firebase.auth
export const firestore = firebase.firestore

// Handling GOOGLE OAUTH 
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt : 'select_account' ,'login_hint': 'user@example.com'})
export const signInWithGoogle = () => auth().signInWithPopup(provider)

export default firebase




