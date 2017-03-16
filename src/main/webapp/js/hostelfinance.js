/**
 * Created by L.H.S on 2017/3/7.
 */

window.onload = function () {
    getFinance();
};

function getFinance() {

        $.ajax({
        type: "POST",
        url: "/hostel/getJoinDays",
        success: function (resp) {
            console.log(resp);
            var spans = $(".total_div").find("span");
            spans[0].innerHTML = resp;
        },
        error: function () {
            alert("获取信息失败");
        }
    });

    $.ajax({
        type: "POST",
        url: "/hostel/getHostelFinance",
        success: function (resp) {
            var datas = resp.data;
            getHostelBar("chartDiv", datas);

            var spans = $(".total_div").find("span");
            spans[1].innerHTML = (datas[0] + datas[1]) * 100;
            spans[2].innerHTML = datas[3];

        },
        error: function () {
            alert("获取统计信息失败");
        }
    });
}

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