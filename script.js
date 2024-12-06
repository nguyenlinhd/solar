document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('home-btn');
    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');
    const shareButtons = document.querySelectorAll('.share-btn');
    const commentSections = document.querySelectorAll('.comments');

    homeButton.addEventListener('click', function(event) {
        event.preventDefault();  
        alert('Home button clicked!');
    });

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
