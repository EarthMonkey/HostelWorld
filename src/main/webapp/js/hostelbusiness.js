/**
 * Created by L.H.S on 2017/3/5.
 */

window.onload = function () {
    getHostelInfo();  
};

function getHostelInfo() {

    $.ajax({
        type: "POST",
        url: "/hostel/getInfo",
        success: function (resp) {
            var infoSpans = $(".info_right").find("span");
            var noticeSpan = $(".notice_div").find("span");

            infoSpans[0].innerHTML = resp.name;
            infoSpans[1].innerHTML = resp.location;
            infoSpans[2].innerHTML = resp.description;
            infoSpans[3].innerHTML = resp.ownername;
            infoSpans[4].innerHTML = resp.phone;
            infoSpans[5].innerHTML = resp.email;

            noticeSpan[0].innerHTML = resp.notice;
        },
        error: function () {
            alert("获取信息失败");
        }
    });
}

function addCheck() {

    var copy = $("#checks").find(".each_check")[0];
    var div = $("<div class='each_check'></div>");
    div.html($(copy).html());

    $("#checks").append(div);
}

function checkMember(checkbox) {
    if (checkbox.checked) {
        $("#card").show();
        $($("#card").parent("div").find("label")[1]).show();
    } else {
        $("#cash").attr("checked", true);
        $("#card").hide();
        $($("#card").parent("div").find("label")[1]).hide();
    }
}

function changeCheck(index) {

    if (index == 0) {
        $("#checkIn").show();
        $("#checkOut").hide();
    } else {
        $("#checkOut").show();
        $("#checkIn").hide();
    }

    $($(".sub_btn")[(index + 1) % 2]).removeClass("sub_btn_native");
    $($(".sub_btn")[index]).addClass("sub_btn_native");
}

// 修改信息
function modInfo() {

    var infoSpans = $(".info_right").find("span");
    var noticeSpan = $(".notice_div").find("span");

    var modInputs = $("#infoMod").find("input");
    var modArea = $("#infoMod").find("textarea");

    modInputs[0].value = infoSpans[3].innerHTML;  // 店主姓名
    modInputs[1].value = infoSpans[5].innerHTML;  // 联系邮箱
    modInputs[2].value = infoSpans[4].innerHTML;  // 联系电话
    modInputs[3].value = infoSpans[0].innerHTML;  // 店名

    modArea[0].value = infoSpans[1].innerHTML;  // 地址
    modArea[1].value = infoSpans[2].innerHTML;  // 描述
    modArea[2].value = noticeSpan[0].innerHTML;  // 公告

    $("#infoMod").fadeIn();

}

// 申请修改
function modApply() {


    $("#infoMod").find(".remind_div").show();
    var span = $("#infoMod").find(".remind_div").find("span")[0];
    self.setInterval(function () {
        var current = parseInt(span.innerHTML);
        span.innerHTML = current - 1;
    }, 1000);

    setTimeout("window.location.reload();", 3000);
}