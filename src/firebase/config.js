import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCf8PbmtfEkvrYlW5-O4VXRG6fsqCWILSA",
    authDomain: "easy-a652c.firebaseapp.com",
    projectId: "easy-a652c",
    storageBucket: "easy-a652c.appspot.com",
    messagingSenderId: "709657638821",
    appId: "1:709657638821:web:1e5839aecd9e0ef2cdda4c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);