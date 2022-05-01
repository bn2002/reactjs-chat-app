import firebase from 'firebase/compat/app'

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhOGjoOg3tx5o3XttC-8mx66lCeduM2qA",
    authDomain: "bn2002-todo.firebaseapp.com",
    projectId: "bn2002-todo",
    storageBucket: "bn2002-todo.appspot.com",
    messagingSenderId: "976187381850",
    appId: "1:976187381850:web:9c9742a54dad4c52c66063",
    measurementId: "G-4K1TSYD88K"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;