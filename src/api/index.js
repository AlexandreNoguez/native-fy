import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHjipSkL6rp5fwkwZk1AGaUj8pGH0GtKU",
  authDomain: "native-fy.firebaseapp.com",
  projectId: "native-fy",
  storageBucket: "native-fy.appspot.com",
  messagingSenderId: "43273843892",
  appId: "1:43273843892:web:b21ee5e9d67f3afe2713e1"
}

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    alert("logou")
  } else {
    alert("Negado")
  }
})

export const firebaseApp = initializeApp(firebaseConfig);
