import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const app = firebase.initializeApp({ 
  apiKey: "AIzaSyA9f2k7_k_XINHHZB41TLn0NItIQN_kpZ8",
  authDomain: "josifha.firebaseapp.com",
  projectId: "josifha",
  storageBucket: "josifha.appspot.com",
  messagingSenderId: "275318575169",
  appId: "1:275318575169:web:8cf46c487c2491c6c776c0",
  measurementId: "G-0DBX63YGKS"
})
export const auth = app.auth() 
export default app

