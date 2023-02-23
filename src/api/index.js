// import * as firebase from "firebase"
import { getApp, getApps, initializeApp, } from 'firebase/app'
import { getAuth, initializeAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from 'firebase/firestore'
import { AsyncStorage } from 'react-native'
import {
  REACT_APP_FIREBASE_API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from '@env'

const firebaseConfig = {
  apiKey: "AIzaSyCHjipSkL6rp5fwkwZk1AGaUj8pGH0GtKU",
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
}

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// db.collection('playlist').getDocs();
// const playLists = collection(db, 'playlist');
// const snapshot = getDocs(playLists);
export function signUpFunc(email, password, navigation) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate('Home', { user })
      alert(user)
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
    });
}
export function signInFunc(email, password, navigation) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigation.navigate('Home')
      alert(user)
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
    });
}

// if (getApps().length < 1) {
//   firebaseApp = initializeApp(firebaseConfig);
//   auth = initializeAuth(firebaseApp, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });
// } else {
//   firebaseApp = getApp();
//   auth = getAuth();
// }


export { auth, firebaseApp }
