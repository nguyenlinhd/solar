document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');
    const shareButtons = document.querySelectorAll('.share-btn');
    const commentSections = document.querySelectorAll('.comments');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Liked!');
        });
    });

    commentButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            commentSections[index].classList.toggle('hidden');
        });
    });

    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Share link copied to clipboard!');
        });
    });
});
