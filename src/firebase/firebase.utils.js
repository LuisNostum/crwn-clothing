// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB8W_EA1x1_x4exqzLdgHOAHyPdFMPzgn8",
    authDomain: "crwn-db-7815c.firebaseapp.com",
    projectId: "crwn-db-7815c",
    storageBucket: "crwn-db-7815c.appspot.com",
    messagingSenderId: "798108023683",
    appId: "1:798108023683:web:e0779a86237339b8cf54b6",
    measurementId: "G-NJZHLM0RDG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
