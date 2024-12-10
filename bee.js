document.addEventListener('DOMContentLoaded', function() {
    // Tạo container cho ong
    const beeContainer = document.createElement('div');
    beeContainer.className = 'bee-container';
    document.body.appendChild(beeContainer);

    // Tạo 3 con ong với thời gian bay khác nhau
    const beeCount = 3;
    for (let i = 0; i < beeCount; i++) {
        const bee = document.createElement('div');
        bee.className = 'bee';
        bee.style.setProperty('--duration', `${15 + i * 5}s`);
        bee.style.setProperty('--delay', `${-i * 5}s`);
        beeContainer.appendChild(bee);

        // Thiết lập chu kỳ đậu hoa
        setInterval(() => {
            landOnFlower(bee);
        }, 20000); // Mỗi 20 giây sẽ đậu một lần
    }

    function landOnFlower(bee) {
        const flowers = document.querySelectorAll('.flower');
        if (!flowers.length) return;

        // Chọn ngẫu nhiên một bông hoa
        const flower = flowers[Math.floor(Math.random() * flowers.length)];
        const rect = flower.getBoundingClientRect();

        // Tính toán vị trí đậu
        const landX = (rect.left + rect.width / 2) + 'px';
        const landY = (rect.top + rect.height / 3) + 'px';

        // Áp dụng animation đậu
        bee.style.setProperty('--land-x', landX);
        bee.style.setProperty('--land-y', landY);
        bee.classList.add('landing');

        // Sau 2 giây thì bay tiếp
        setTimeout(() => {
            bee.classList.remove('landing');
        }, 2000);
    }
});
