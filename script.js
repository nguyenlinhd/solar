document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động submit mặc định

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tài khoản và mật khẩu (ví dụ đơn giản, trong thực tế bạn sẽ kiểm tra từ phía server)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});
