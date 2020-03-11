import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = new firebase.auth();

export default firebase;
