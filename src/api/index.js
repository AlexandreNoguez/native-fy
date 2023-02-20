import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth, initializeAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from 'firebase/firestore'
// import { AsyncStorage } from 'react-native'
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from '@env'

const firebaseConfig = {
  apiKey: API_KEY,
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

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    alert("logou")
  } else {
    alert("Negado")
  }
})

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
