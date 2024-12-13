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
  // Ngăn chặn form submit và reload trang
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");
  
  // Kiểm tra điều kiện
  if (username.length < 3) {
    errorMessage.textContent = "Tên đăng nhập phải có ít nhất 3 ký tự";
    return false;
  }
  
  if (password.length < 8) {
    errorMessage.textContent = "Mật khẩu phải có ít nhất 8 ký tự";
    return false;
  }
  
  // Nếu thông tin hợp lệ, mở trang web trong tab mới
  window.location.href = "https://nguyenlinhd.github.io/git_06/";
  return false;
}

// Panda eye tracking animation
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  const eyeL = document.querySelector(".eyeball-l");
  const eyeR = document.querySelector(".eyeball-r");
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();
  
  // Tính toán vị trí chuột
  const relmouseX = mouseX - containerRect.left;
  const relmouseY = mouseY - containerRect.top;
  
  // Tính góc giữa chuột và mắt
  const angleL = Math.atan2(
    relmouseY - eyeL.getBoundingClientRect().top + containerRect.top,
    relmouseX - eyeL.getBoundingClientRect().left + containerRect.left
  );
  
  const angleR = Math.atan2(
    relmouseY - eyeR.getBoundingClientRect().top + containerRect.top,
    relmouseX - eyeR.getBoundingClientRect().left + containerRect.left
  );
  
  // Di chuyển mắt
  const maxMove = 2;
  eyeL.style.transform = `translate(${Math.cos(angleL) * maxMove}px, ${
    Math.sin(angleL) * maxMove
  }px)`;
  eyeR.style.transform = `translate(${Math.cos(angleR) * maxMove}px, ${
    Math.sin(angleR) * maxMove
  }px)`;
});

// Clear error message when user starts typing
usernameRef.addEventListener("input", () => {
  errorMessage.textContent = "";
});

passwordRef.addEventListener("input", () => {
  errorMessage.textContent = "";
});

// Add event listener to form submission
document.getElementById("login-form").addEventListener("submit", validateForm);