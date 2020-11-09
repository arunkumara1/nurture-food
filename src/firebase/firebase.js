import firebase, { initializeApp } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeRjhFyJKXHDWprE2BCZrgsvZPPgxVZp8",
    authDomain: "nurture-food.firebaseapp.com",
    databaseURL: "https://nurture-food.firebaseio.com",
    projectId: "nurture-food",
    storageBucket: "nurture-food.appspot.com",
    messagingSenderId: "1030367925350",
    appId: "1:1030367925350:web:1bfb6b785fca6b5ea249a7",
    measurementId: "G-LWKM3TGJ9V"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export { auth , provider };

  export default db;