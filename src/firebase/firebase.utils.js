import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBueIrlSK88vcYaNDSPinXJOTbQkg0TGlc",
  authDomain: "e-commerce-db-f785e.firebaseapp.com",
  databaseURL: "https://e-commerce-db-f785e.firebaseio.com",
  projectId: "e-commerce-db-f785e",
  storageBucket: "e-commerce-db-f785e.appspot.com",
  messagingSenderId: "884575338399",
  appId: "1:884575338399:web:0c40423ecab2c6301987aa",
  measurementId: "G-KRM2X3N570"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
