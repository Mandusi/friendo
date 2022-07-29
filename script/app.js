import { Post } from './Post.js';
import { addDocumentToFb } from './firebase.js';
import { getPostsFromFb } from './firebase.js';
import { publishPostHandler } from './publishPostHandler.js';
import { cancelPostHandler } from './cancelPostHandler.js';
import { addPostHandler } from './addPostHandler.js';

export const createPostEl = document.querySelector('.create-new-post-card');
const addPostButton = document.getElementById('new-post-button');
const cancelPostButton = document.getElementById('new-post-cancel-button');
const publishPostButton = document.getElementById('new-post-publish-button');

getPostsFromFb();

addPostButton.addEventListener('click', addPostHandler);
publishPostButton.addEventListener('click', publishPostHandler);
cancelPostButton.addEventListener('click', cancelPostHandler);

conso;
