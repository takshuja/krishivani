import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDQ74Xu6cc1J-Uig3jbfHUa-sPAaDbByXU",
    authDomain: "krishivani-46a33.firebaseapp.com",
    projectId: "krishivani-46a33",
    storageBucket: "krishivani-46a33.firebasestorage.app",
    messagingSenderId: "105552788506",
    appId: "1:105552788506:web:72f86b58c3fe0f087925a3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebase_auth = getAuth(firebaseApp)
const firebase_firestore = getFirestore(firebaseApp);
const firebase_storage = getStorage(firebaseApp);

export { firebaseApp, firebase_auth, firebase_firestore, firebase_storage };