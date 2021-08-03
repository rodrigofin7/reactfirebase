import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBl3tuNv-WQN-WxLjGd9XJUv83CnmwI-0o",
    authDomain: "reactcrud-ed27b.firebaseapp.com",
    projectId: "reactcrud-ed27b",
    storageBucket: "reactcrud-ed27b.appspot.com",
    messagingSenderId: "738277821229",
    appId: "1:738277821229:web:6d065610f050ac225b61a4",
    measurementId: "G-PY3ZSRLM4K"
  };
  // Initialize Firebase
 const fb =  firebase.initializeApp(firebaseConfig);

 export const db = fb.firestore(); 