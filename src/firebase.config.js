import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore}  from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAtuLCjeQ_vwXNzP_twV6EC75s8SYS5Cy4",
  authDomain: "ecomart-75f6f.firebaseapp.com",
  projectId: "ecomart-75f6f",
  storageBucket: "ecomart-75f6f.appspot.com",
  messagingSenderId: "930674867385",
  appId: "1:930674867385:web:6909168e3e950c2fb22f68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;