document.addEventListener("DOMContentLoaded", function() {
    const circle = document.querySelector('.circle');
    const musicLogo = document.querySelector('.music-logo');
    const musicPlayer = document.getElementById('music-player');

    circle.addEventListener('mouseover', function() {
        this.style.animation = 'rotate 2s linear infinite';
    });

    circle.addEventListener('mouseout', function() {
        this.style.animation = 'rotate 3s linear infinite';
    });

    musicLogo.addEventListener('click', function() {
        if (musicPlayer.classList.contains('hidden')) {
            musicPlayer.classList.remove('hidden');
        } else {
            musicPlayer.classList.add('hidden');
        }
    });
});
