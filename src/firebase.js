// Import the functions from the SDKs 
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB59uj-nis9NbvwSZ2x768xVbpK9w4vAmI",
    authDomain: "account-auth-ca8b1.firebaseapp.com",
    projectId: "account-auth-ca8b1",
    storageBucket: "account-auth-ca8b1.appspot.com",
    messagingSenderId: "207417363232",
    appId: "1:207417363232:web:ed1b64123e09f5cbada545",
    measurementId: "G-K0NC8NK3NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the auth instance
const auth = getAuth(app);

// Export the auth functions
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile };