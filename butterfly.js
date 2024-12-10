document.addEventListener('DOMContentLoaded', function() {
    // Đợi 5 giây sau khi hoa nở và ong xuất hiện
    setTimeout(() => {
        // Tạo container cho bướm
        const butterflyContainer = document.createElement('div');
        butterflyContainer.className = 'butterfly-container';
        document.body.appendChild(butterflyContainer);

        // Tạo 2 con bướm với thời gian bay khác nhau
        const butterflyCount = 2;
        for (let i = 0; i < butterflyCount; i++) {
            const butterfly = document.createElement('div');
            butterfly.className = 'butterfly';
            butterfly.style.setProperty('--duration', `${25 + i * 8}s`);
            butterfly.style.setProperty('--delay', `${i * 3}s`);
            butterfly.style.opacity = '0';
            butterflyContainer.appendChild(butterfly);

            // Hiệu ứng xuất hiện từ từ
            setTimeout(() => {
                butterfly.style.transition = 'opacity 1.5s';
                butterfly.style.opacity = '1';
            }, i * 1500);

            // Thiết lập chu kỳ đậu hoa
            setTimeout(() => {
                setInterval(() => {
                    landOnFlower(butterfly);
                }, 18000 + i * 3000); // Mỗi con bướm có chu kỳ đậu khác nhau
            }, 6000 + i * 2500);
        }
    }, 5000); // Đợi 5 giây sau khi hoa nở

    function landOnFlower(butterfly) {
        const flowers = document.querySelectorAll('.flower');
        if (!flowers.length) return;

        // Chọn ngẫu nhiên một bông hoa
        const flower = flowers[Math.floor(Math.random() * flowers.length)];
        const rect = flower.getBoundingClientRect();

        // Tính toán vị trí đậu
        const landX = (rect.left + rect.width / 2) + 'px';
        const landY = (rect.top + rect.height / 3) + 'px';

        // Áp dụng animation đậu
        butterfly.style.setProperty('--land-x', landX);
        butterfly.style.setProperty('--land-y', landY);
        butterfly.classList.add('landing');

        // Sau 3 giây thì bay tiếp
        setTimeout(() => {
            butterfly.classList.remove('landing');
        }, 3000);
    }
});
