import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyC-9c4CyZvA2B8s_IsCWqe46yHGaDMcoLw",
  authDomain: "moviesbyte-d7c60.firebaseapp.com",
  projectId: "moviesbyte-d7c60",
  storageBucket: "moviesbyte-d7c60.appspot.com",
  messagingSenderId: "155117290697",
  appId: "1:155117290697:web:f9261bf3f211181ab0f918"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();


export default db;

