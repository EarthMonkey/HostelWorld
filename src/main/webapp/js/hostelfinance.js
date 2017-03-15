/**
 * Created by L.H.S on 2017/3/7.
 */

function logout() {
    $.ajax({
        type: "POST",
        url: "/user/Logout",
        data: {
            attr: "userId"
        },
        success: function () {
            location.href = "../HomePage.jsp"
        },
        error: function () {
            alert("登出失败");
        }
    });
}