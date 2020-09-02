import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB9BQa9-AZuphzF2Hbrs5kYGPg3ti9vN6I",
    authDomain: "photogram-6fbf7.firebaseapp.com",
    databaseURL: "https://photogram-6fbf7.firebaseio.com",
    projectId: "photogram-6fbf7",
    storageBucket: "photogram-6fbf7.appspot.com",
    messagingSenderId: "315566555879",
    appId: "1:315566555879:web:ae485c2925d56d3e52d842"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projStorage = firebase.storage();
  const projFireStore = firebase.firestore(); 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projStorage, projFireStore, timestamp };