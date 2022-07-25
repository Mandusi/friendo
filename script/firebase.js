import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyD3taorkZlqirfmllXogAufnC_Ng2FfnYw',
  authDomain: 'friendo-e3d65.firebaseapp.com',
  projectId: 'friendo-e3d65',
  storageBucket: 'friendo-e3d65.appspot.com',
  messagingSenderId: '435137220442',
  appId: '1:435137220442:web:2cd1cf9508a7bed761ad63',
  measurementId: 'G-G9FG6W8H85',
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'Posts');

getDocs(colRef)
  .then((snapshot) => {
    let posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
      console.log(posts);
    });
  })
  .chatch((err) => console.log(err));
