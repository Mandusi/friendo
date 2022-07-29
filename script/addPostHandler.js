import { createPostEl } from './app.js';

export function addPostHandler(event) {
    event.preventDefault();

    // OPENS CREATE POST CARD
    createPostEl.classList.toggle('visible');
}
