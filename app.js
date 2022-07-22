const createPostEl = document.getElementById('create-new-post-card');
const addPostButton = document.getElementById('new-post-button');

function addPostHandler(event) {
  event.preventDefault();
  createPostEl.style.display = 'flex';
}

addPostButton.addEventListener('click', addPostHandler);
