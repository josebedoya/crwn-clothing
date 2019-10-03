import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9G5P5pba1ti0jLQJwwUB-yJS1GEsSOVg",
  authDomain: "my-project-1496864759514.firebaseapp.com",
  databaseURL: "https://my-project-1496864759514.firebaseio.com",
  projectId: "my-project-1496864759514",
  storageBucket: "",
  messagingSenderId: "518254938242",
  appId: "1:518254938242:web:ebd6f9ac94f37ac3ff4c9b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
