document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginbtn');
        loginForm.addEventListener('click', function(event) {
            var msg = document.getElementsByClassName("errormsg");
            msg[0].innerHTML = '<div class="alert alert-danger" role="alert">登入無效，請重試</div>';
            // msg.innerHTML = '123';
            // 獲取帳號和密碼的值
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // 顯示警告框
            alert('帳號為：' + username + '，密碼為：' + password + '\n請注意是否進入釣魚網站！');
        });
});
