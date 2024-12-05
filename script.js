document.addEventListener("DOMContentLoaded", function() {
    const circle = document.querySelector('.circle');
    
    circle.addEventListener('mouseover', function() {
        this.style.animation = 'rotate 2s linear infinite';
    });
    
    circle.addEventListener('mouseout', function() {
        this.style.animation = 'float 3s ease-in-out infinite';
    });
});

// Keyframes for rotation animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`, styleSheet.cssRules.length);
