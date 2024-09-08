document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Thực hiện kiểm tra đơn giản (chỉ để ví dụ)
    if (username === 'admin' && password === '123456') {
        alert('Đăng nhập thành công!');
        // Chuyển hướng đến trang chính hoặc làm gì đó sau khi đăng nhập thành công
        // window.location.href = 'trang-chinh.html';
    } else {
        errorMessage.textContent = 'Tài khoản hoặc mật khẩu không chính xác!';
    }
});

document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Chức năng "Quên mật khẩu" đang được phát triển.');
});
