// Import the functions you need from the SDKs you need
// import { useDeviceLanguage } from 'firebase/auth

import { initializeApp } from 'firebase/app'
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
//import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// useDeviceLanguage();
const firebaseConfig = {
  apiKey: 'AIzaSyCUI4oSbbfJek_li2q-Cdn9lMVrrt8i6w8',

  authDomain: 'supportsnap-d9151.firebaseapp.com',

  projectId: 'supportsnap-d9151',

  storageBucket: 'supportsnap-d9151.firebasestorage.app',

  messagingSenderId: '895186336220',

  appId: '1:895186336220:web:0b48d4b50dda90854fb719',

  measurementId: 'G-9RCG909YM0'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);
//const provider = new GoogleAuthProvider()
const auth = getAuth(app)

//export { auth }
export { auth, GoogleAuthProvider, signInWithPopup, signOut }
