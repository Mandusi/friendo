import { createPostEl } from './app.js';

export function cancelPostHandler() {
    createPostEl.classList.toggle('visible');
}
