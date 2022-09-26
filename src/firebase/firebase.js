import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkSDUlUyiseQb-920klSx_ldAw8bRxJkY",
    authDomain: "clone-9ef1c.firebaseapp.com",
    projectId: "clone-9ef1c",
    storageBucket: "clone-9ef1c.appspot.com",
    messagingSenderId: "773172841265",
    appId: "1:773172841265:web:a13a7124ee6ad39e7f3e10",
    measurementId: "G-NVMS515NBS"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
