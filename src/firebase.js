import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-eppz3fdjCG60iteyu8QSuXKLknOnXZ0",
  authDomain: "clone-1df15.firebaseapp.com",
  databaseURL: "https://clone-1df15.firebaseio.com",
  projectId: "clone-1df15",
  storageBucket: "clone-1df15.appspot.com",
  messagingSenderId: "164160420539",
  appId: "1:164160420539:web:77081a299f0497c630879e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
