import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwE4X5D7RRGPnuy8r2qh4e8vTXdt0qQSU",
  authDomain: "shopping-db-ecommerce-store.firebaseapp.com",
  projectId: "shopping-db-ecommerce-store",
  storageBucket: "shopping-db-ecommerce-store.appspot.com",
  messagingSenderId: "944112757187",
  appId: "1:944112757187:web:855108139362aa0edbb576",
  measurementId: "G-GRWKPRWK21",
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
