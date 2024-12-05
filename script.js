document.addEventListener("DOMContentLoaded", function() {
    const circle = document.querySelector('.circle');
    
    circle.addEventListener('mouseover', function() {
        this.style.animation = 'rotate 2s linear infinite';
    });
    
    circle.addEventListener('mouseout', function() {
        this.style.animation = 'rotate 3s linear infinite';
    });
});
