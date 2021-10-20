 import firebase from "firebase";
 

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7ZunxLXlkAcyUCZ2Ca5P3nMB0lTigbSg",
  authDomain: "todoapp-4f51c.firebaseapp.com",
  projectId: "todoapp-4f51c",
  storageBucket: "todoapp-4f51c.appspot.com",
  messagingSenderId: "210482676033",
  appId: "1:210482676033:web:06a1edcae4f89100af21c0",
  measurementId: "G-11V29E4Y8X"
  });

  const db = firebaseApp.firestore();

  export default db;