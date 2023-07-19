import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxI9YxbYhzFxWewzxLAyGvHRcro8tqPIk",
  authDomain: "react-hooks-blog-fa3ae.firebaseapp.com",
  projectId: "react-hooks-blog-fa3ae",
  storageBucket: "react-hooks-blog-fa3ae.appspot.com",
  messagingSenderId: "957715671768",
  appId: "1:957715671768:web:1dc8b3e6e85c89192085ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();