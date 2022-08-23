import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyChCxMIvjv8J0_rxPmda7JfkjWKVdGn_Oc",
  authDomain: "disney-plus-clone-17694.firebaseapp.com",
  projectId: "disney-plus-clone-17694",
  storageBucket: "disney-plus-clone-17694.appspot.com",
  messagingSenderId: "973244858843",
  appId: "1:973244858843:web:d0f5074d78288e5dbb67fe",
  measurementId: "G-8E6QZ1EVXD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;