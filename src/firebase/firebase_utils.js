import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCcLfQUnoTsU5napN1K_20l6GG2rYY7s30",
  authDomain: "dev-clothing-db.firebaseapp.com",
  databaseURL: "https://dev-clothing-db.firebaseio.com",
  projectId: "dev-clothing-db",
  storageBucket: "dev-clothing-db.appspot.com",
  messagingSenderId: "475026854914",
  appId: "1:475026854914:web:c9b0db9c8f333d1432431b",
  measurementId: "G-7TE285LPFB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;