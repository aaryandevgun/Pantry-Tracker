// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz6VieCJ-5SOV-uj918Y3ZdeCDwgfYjeY",
  authDomain: "inventory-management-e6300.firebaseapp.com",
  projectId: "inventory-management-e6300",
  storageBucket: "inventory-management-e6300.appspot.com",
  messagingSenderId: "788890070744",
  appId: "1:788890070744:web:1f77d1177c116a2f2831ad",
  measurementId: "G-JT54CQ1CPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore};