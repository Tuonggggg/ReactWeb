// Xóa mục khỏi giỏ hàng
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.cart-item').remove();
        updateCartSummary();
    });
});

// Cập nhật tổng số tiền
function updateCartSummary() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        if (item.querySelector('.item-checkbox').checked) {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('input').value);
            total += price * quantity;
        }
    });
    document.querySelector('.cart-summary p').innerHTML = `<strong>Tổng cộng:</strong> $${total.toFixed(2)}`;
}

// Áp dụng mã giảm giá
document.querySelector('.apply-voucher').addEventListener('click', function() {
    const voucherCode = document.querySelector('#voucher-code').value;
    // Giả sử mã giảm giá không có thực và không làm thay đổi tổng số tiền
    alert(`Mã giảm giá ${voucherCode} đã được áp dụng!`);
});

// Cập nhật tổng số tiền khi số lượng sản phẩm thay đổi hoặc checkbox được chọn
document.querySelectorAll('.item-quantity input, .item-checkbox').forEach(input => {
    input.addEventListener('change', updateCartSummary);
});

// Cập nhật tổng số tiền khi trang tải
updateCartSummary();
