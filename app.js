const addPost = document.getElementById('new-post-button');

function addPostHandler(event) {
  event.preventDefault();
  console.log('bra');
}

addPost.addEventListener('click', addPostHandler);
