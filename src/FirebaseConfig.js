// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBvus4B-Ov4jhvb-dGTG0aTSco6A1micCo",
    authDomain: "clone-b5cdf.firebaseapp.com",
    projectId: "clone-b5cdf",
    storageBucket: "clone-b5cdf.appspot.com",
    messagingSenderId: "692700043040",
    appId: "1:692700043040:web:71a697898df18ecf40e945",
    measurementId: "G-5F2M94NV08"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
