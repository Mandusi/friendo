import { Post } from './Post.js';

const createPostEl = document.querySelector('.create-new-post-card');
const addPostButton = document.getElementById('new-post-button');

function addPostHandler(event) {
  event.preventDefault();

  // OPENS CREATE POST CARD
  createPostEl.classList.toggle('visible');
}

addPostButton.addEventListener('click', addPostHandler);

const publishPostButton = document.getElementById('new-post-publish-button');

function publishPostHandler(event) {
  event.preventDefault();

  const activityInput = document.getElementById('post-activity-bar').value;
  const messageInput = document.getElementById('post-message-bar').value;
  const dateInput = document.getElementById('post-date-bar').value;
  const locationInput = document.getElementById('post-location-bar').value;

  const newPost = new Post(
    activityInput,
    messageInput,
    dateInput,
    locationInput
  );

  createPostEl.classList.toggle('visible');
  console.log(newPost);
}

publishPostButton.addEventListener('click', publishPostHandler);
