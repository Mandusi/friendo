import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import {
    getFirestore,
    doc,
    addDoc,
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

//GETS THE POST DATA FROM FIRESTORE

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'Posts');

export function getPostsFromFb() {
    let posts = [];

    getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                posts.push({ ...doc.data(), id: doc.id });
            });

            const postsSectionEl = document.querySelector('.posts');
            console.log(posts);
            posts.forEach((post) => {
                const postCardEl = document.createElement('div');
                postCardEl.classList = 'post-card';

                const postCardValue = `        
                          <div class="post-card-header">
                            <img src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-3.jpg" alt="profile picture" class="profile-picture">
                            <p class="nickname">@${post.uid}</p>
                            <p>&nbsp to &nbsp</p>
                            <p class="activity-name">#${post.activity}</p>
                          </div>
                          <p class="post-text">${post.message}</p>
                          <div class="post-card-footer">
                            <p class="post-date">${post.date}</p>
                            <p class="post-location">${post.location}</p>
                          </div>`;

                postCardEl.innerHTML = postCardValue;
                postsSectionEl.appendChild(postCardEl);
            });
        })
        .catch((err) => console.log(err));

    return posts;
}

export function addDocumentToFb(document) {
    addDoc(colRef, { ...document });
}
