export function publishPostHandler(event) {
    event.preventDefault();

    let activityInput = document.getElementById('post-activity-bar').value;
    let messageInput = document.getElementById('post-message-bar').value;
    let dateInput = document.getElementById('post-date-bar').value;
    let locationInput = document.getElementById('post-location-bar').value;

    if (
        activityInput.trim() !== '' &&
        messageInput.trim() !== '' &&
        dateInput.trim() !== '' &&
        locationInput.trim() !== ''
    ) {
        const newPost = new Post(
            activityInput,
            messageInput,
            dateInput,
            locationInput
        );

        addDocumentToFb(newPost);

        createPostEl.classList.toggle('visible');

        const formEl = document.getElementById('new-post-form');
        formEl.reset();

        activityInput = '';
        messageInput = '';
        dateInput = '';
        locationInput = '';
    } else {
        console.log('All areas must be filled.');
    }
}
