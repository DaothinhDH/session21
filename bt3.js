let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword")

function saveAccount() {
    if (password.value !== confirmPassword.value) {
        alert("Mật khẩu không khớp vui lòng nhập lại")
        return false;
    }
    let users = JSON.parse(localStorage.getItem("users"))

    let index = users.findIndex(user => user.email == email.value)
    if (index == -1) {
        users.push({
            email: email.value,
            password: password.value    
        })
        localStorage.setItem("users", JSON.stringify(users));
        alert("Bạn đã tạo thành công");
    } else {
        alert("Tài Khoản Đã Tồn Tại")
    }    
}