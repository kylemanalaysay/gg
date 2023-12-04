import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAYXjvQ7XFKl8FCIfzjwvmsVyDH1EhV3s",
  authDomain: "taskmanager-63436.firebaseapp.com",
  projectId: "taskmanager-63436",
  storageBucket: "taskmanager-63436.appspot.com",
  messagingSenderId: "299478862740",
  appId: "1:299478862740:web:834ad444d1f38872925d81",
  measurementId: "G-EBLDEVEH4G"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)