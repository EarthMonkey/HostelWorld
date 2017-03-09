/**
 * Created by L.H.S on 2017/1/18.
 */

function changeTab(index) {

    if (index == 0) {
        $("#hostel_div").hide();
        $("#user_div").slideDown();

        $(".tab_div")[1].className = "tab_div";
        $(".tab_div")[0].className = "tab_div tab_selected";
    } else {
        $("#user_div").hide();
        $("#hostel_div").slideDown();

        $(".tab_div")[0].className = "tab_div";
        $(".tab_div")[1].className = "tab_div tab_selected";
    }

}

function showLogin(id) {
    $("#initial").hide();
    $(id).fadeIn();
}

function backInitial(id) {
    $(id).hide();
    $("#initial").fadeIn();
}

var err_lbl = document.createElement("div");
err_lbl.className = "err_lbl";

function login(id) {

    var index = 0;
    if (id == "#hostelLogin") {
        index = 1;
    } else if (id == "#managerLogin") {
        index = 2;
    }

    var errTip = ["请输入会员卡号", "请输入客栈编号", "请输入工作编号"];

    var inputDiv = $(id).find("input");
    if (inputDiv[0].value == "") {
        err_lbl.innerHTML = errTip[index];
        inputDiv[0].parentNode.appendChild(err_lbl);
        $(inputDiv[0]).focus(function () {
            $(err_lbl).remove();
        });
        return;
    }

    if (inputDiv[1].value == "") {
        err_lbl.innerHTML = "请输入密码";
        inputDiv[1].parentNode.appendChild(err_lbl);
        $(inputDiv[1]).focus(function () {
            $(err_lbl).remove();
        });
        return;
    }

    var href = ["user/UserOrder.jsp", "hostel/HostelBusiness.jsp", "Approval.jsp"];

    window.location.href = href[index];
}

function confirmBank() {

    var input = $("#bank_copy").find("input");

    if ($(input).val() == "") {
        $("#bank_copy").slideUp();
        $(".add_bank").show();
    } else {
        $(input).css("background-color", "transparent");
        $(input).attr("disabled", "disabled");
        var iTag = $("#bank_copy").find("i");
        $(iTag[0]).css("display", "none");
        $(iTag[1]).css("display", "none");
        $(iTag[2]).css("display", "");
        $(input)[0].className = "input_hover_no";

        $(".add_bank").hide();
    }

}

var oldVal = "";

function cancelBank() {

    var input = $("#bank_copy").find("input");

    if (oldVal == "") {
        $("#bank_copy").slideUp();
    } else {
        $(input).val(oldVal);
        $(input).css("background-color", "transparent");
        $(input).attr("disabled", "disabled");
        var iTag = $("#bank_copy").find("i");
        $(iTag[0]).css("display", "none");
        $(iTag[1]).css("display", "none");
        $(iTag[2]).css("display", "");
        $(input)[0].className = "input_hover_no";
        oldVal = "";
    }
}

function modifyBank() {

    var input = $("#bank_copy").find("input");

    $(input).css("background-color", "#fff");
    $(input).removeAttr("disabled");
    var iTag = $("#bank_copy").find("i");
    $(iTag[0]).css("display", "");
    $(iTag[1]).css("display", "");
    $(iTag[2]).css("display", "none");
    $(input)[0].className = "input_text bank_text";

    oldVal = $(input).val();
}

var creditId;

// 注册会员卡——下一步
function nextStep(index) {

    if (index == 1) {
        // 填写信息后
        $($("#creditApply").find("img"))[0].src = "../image/step_2.png";
        $("#step1").hide();
        $("#step2").show();
        creditId = "1234567";
        $("#step2")[0].getElementsByTagName("span")[0].innerHTML = creditId;

    } else if (index == 2) {
        // 注册会员卡后
        $($("#creditApply").find("img"))[0].src = "../image/step_3.png";
        $("#step2").hide();
        $("#step3").show();
        $("#step3").find(".id_div").find("span")[0].innerHTML = creditId;
    } else if (index == 3) {
        // 充值后

        $($("#creditApply").find("img"))[0].src = "../image/step_4.png";

        toLogin("#step3")
    }
}

// 设置会员卡密码
function setUserPwd() {

    var pwd = $("#step2").find("input")[0];
    if (pwd.value == "") {
        err_lbl.innerHTML = "请设置密码";
        pwd.parentNode.appendChild(err_lbl);
        $(pwd).focus(function () {
            $(err_lbl).remove();
        });
        return;
    }

    var pwd2 = $("#step2").find("input")[1];
    if (pwd2.value !== pwd.value) {
        err_lbl.innerHTML = "两次密码不一致";
        pwd2.parentNode.appendChild(err_lbl);
        $(pwd2).focus(function () {
            $(err_lbl).remove();
        });
        return;
    }

    toLogin("#step2")
}

function toLogin(id) {
    $(id).find(".remind_div").show();
    var span = $(id).find(".remind_div").find("span")[0];
    self.setInterval(function () {
        var current = parseInt(span.innerHTML);
        span.innerHTML = current - 1;
    }, 1000);

    setTimeout("window.location.reload();", 3000);
}

// 申请开店
function hostelApply() {


    toLogin("#hostelApply");
}

var hostelId;
// 客栈注册
function checkCode(index) {

    if (index == 1) {
        // 验证注册码

        $("#regStep1").hide();
        $("#regStep2").show();

        hostelId = "7654321";
        $("#regStep2").find(".id_div").find("span")[0].innerHTML = hostelId;
    } else {
        // 设置密码

        var pwd = $("#regStep2").find("input")[0];
        if (pwd.value == "") {
            err_lbl.innerHTML = "请设置密码";
            pwd.parentNode.appendChild(err_lbl);
            $(pwd).focus(function () {
                $(err_lbl).remove();
            });
            return;
        }

        var pwd2 = $("#regStep2").find("input")[1];
        if (pwd2.value !== pwd.value) {
            err_lbl.innerHTML = "两次密码不一致";
            pwd2.parentNode.appendChild(err_lbl);
            $(pwd2).focus(function () {
                $(err_lbl).remove();
            });
            return;
        }

        toLogin("#regStep2");
    }

}