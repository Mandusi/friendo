import { Post } from './Post.js';

const createPostEl = document.querySelector('.create-new-post-card');
const addPostButton = document.getElementById('new-post-button');
const cancelPostButton = document.getElementById('new-post-cancel-button');

function addPostHandler(event) {
  event.preventDefault();

  // OPENS CREATE POST CARD
  createPostEl.classList.toggle('visible');
}

addPostButton.addEventListener('click', addPostHandler);

const publishPostButton = document.getElementById('new-post-publish-button');

function publishPostHandler(event) {
  event.preventDefault();

  let activityInput = document.getElementById('post-activity-bar').value;
  let messageInput = document.getElementById('post-message-bar').value;
  let dateInput = document.getElementById('post-date-bar').value;
  let locationInput = document.getElementById('post-location-bar').value;

  if (
    activityInput !== '' &&
    messageInput !== '' &&
    dateInput !== '' &&
    locationInput !== ''
  ) {
    const newPost = new Post(
      activityInput,
      messageInput,
      dateInput,
      locationInput
    );
    console.log(newPost);
    createPostEl.classList.toggle('visible');
    activityInput = '';
    messageInput = '';
    dateInput = '';
    locationInput = '';
  } else {
  }
}

function cancelPostHandler() {
  createPostEl.classList.toggle('visible');
}

publishPostButton.addEventListener('click', publishPostHandler);
cancelPostButton.addEventListener('click', cancelPostHandler);
