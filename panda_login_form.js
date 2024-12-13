let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let errorMessage = document.getElementById("error-message");

// Animation functions
let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
    right:0.6em;
    top:0.6em;
  `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
    height: 2.81em;
    top:8.4em;
    left:7.5em;
    transform: rotate(0deg);
  `;
  handR.style.cssText = `
    height: 2.81em;
    top: 8.4em;
    right: 7.5em;
    transform: rotate(0deg)
  `;
};

// Track cursor position in input fields
function moveEyes(e) {
  const input = e.target;
  const rect = input.getBoundingClientRect();
  const cursorPosition = input.selectionStart;
  const textWidth = input.value.length;
  
  // Nếu không có text, giữ mắt ở giữa
  if (textWidth === 0) {
    eyeL.style.cssText = `
      left: 0.6em;
      top: 0.6em;
      transition: all 0.1s ease;
    `;
    eyeR.style.cssText = `
      right: 0.6em;
      top: 0.6em;
      transition: all 0.1s ease;
    `;
    return;
  }

  // Tính toán vị trí mắt dựa trên vị trí con trỏ
  const percentage = cursorPosition / textWidth;
  const leftEyeX = 0.4 + (percentage * 0.8); // Di chuyển từ 0.4em đến 1.2em
  const rightEyeX = 0.4 + (percentage * 0.8);
  
  // Thêm chút chuyển động theo chiều dọc
  const eyeY = 0.6 + (percentage > 0.5 ? 0.2 : 0);

  eyeL.style.cssText = `
    left: ${leftEyeX}em;
    top: ${eyeY}em;
    transition: all 0.1s ease;
  `;
  eyeR.style.cssText = `
    right: ${rightEyeX}em;
    top: ${eyeY}em;
    transition: all 0.1s ease;
  `;
}

// Event listeners for username field
usernameRef.addEventListener('input', moveEyes);
usernameRef.addEventListener('keyup', moveEyes);
usernameRef.addEventListener('click', moveEyes);
usernameRef.addEventListener('select', moveEyes);

// Focus events
usernameRef.addEventListener("focus", () => {
  if (usernameRef.value.length === 0) {
    eyeL.style.cssText = `
      left: 0.75em;
      top: 1.12em;  
    `;
    eyeR.style.cssText = `
      right: 0.75em;
      top: 1.12em;
    `;
  }
  normalHandStyle();
});

passwordRef.addEventListener("focus", () => {
  handL.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    left: 11.75em;
    transform: rotate(-155deg);    
  `;
  handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
  normalEyeStyle();
});

// Reset eyes when clicking outside
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalEyeStyle();
    normalHandStyle();
  }
});

// Form validation
function validateForm(event) {
  event.preventDefault();
  errorMessage.textContent = "";

  const username = usernameRef.value.trim();
  const password = passwordRef.value;

  // Basic validation
  if (username.length < 3) {
    errorMessage.textContent = "Username must be at least 3 characters long";
    return false;
  }

  if (password.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters long";
    return false;
  }

  // Password strength validation
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!(hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar)) {
    errorMessage.textContent = "Password must contain uppercase, lowercase, numbers and special characters";
    return false;
  }

  // Nếu validation thành công, gọi hàm xử lý đăng nhập
  handleLogin(username, password);
  return false;
}

// Hàm xử lý đăng nhập
function handleLogin(username, password) {
  // Tạm thởi hardcode thông tin đăng nhập để test
  // Bạn có thể thay đổi thông tin này sau
  const validUsername = "admin";
  const validPassword = "Admin@123";

  if (username === validUsername && password === validPassword) {
    // Đăng nhập thành công
    errorMessage.textContent = "Login successful! Redirecting...";
    errorMessage.style.color = "#2ecc71"; // Màu xanh cho thông báo thành công
    
    // Đợi 1 giây trước khi chuyển trang
    setTimeout(() => {
      // Chuyển đến trang page.html
      window.location.href = "page.html";
    }, 1000);
  } else {
    // Đăng nhập thất bại
    errorMessage.textContent = "Invalid username or password";
    errorMessage.style.color = "#ff3333";
  }
}

// Clear error message when user starts typing
usernameRef.addEventListener("input", () => {
  errorMessage.textContent = "";
});

passwordRef.addEventListener("input", () => {
  errorMessage.textContent = "";
});

// Add event listener to form submission
document.getElementById("login-form").addEventListener("submit", validateForm);