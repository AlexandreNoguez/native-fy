import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from 'firebase/firestore'
import { AsyncStorage } from 'react-native'

const firebaseConfig = {
  apiKey: "AIzaSyCHjipSkL6rp5fwkwZk1AGaUj8pGH0GtKU",
  authDomain: "native-fy.firebaseapp.com",
  projectId: "native-fy",
  storageBucket: "native-fy.appspot.com",
  messagingSenderId: "43273843892",
  appId: "1:43273843892:web:b21ee5e9d67f3afe2713e1"
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


export { auth, firebaseApp }
