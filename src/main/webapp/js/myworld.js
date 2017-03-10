/**
 * Created by L.H.S on 2017/2/2.
 */

var INIT = [1, 0, 0, 0];  // 用来判断是否第一次加载数据
var USER_INFO;  // 用来存储user对象
var USER_ID;

window.onload = function () {
    getUserInfo();
    initMyOrder();
};

// 子导航
var LAST_TAB = 0;
function changeTab(index) {

    if (index == LAST_TAB) {
        return;
    }

    var tabId = ["#myOrder", "#checkIn", "#bill", "#myAccount"];

    $(".inner_div")[LAST_TAB].className = "inner_div";
    $(".inner_div")[index].className = "inner_div sub_native";
    $(tabId[LAST_TAB]).hide();
    $(tabId[index]).slideDown(300);

    if (INIT[index] == 0) {
        if (index == 1) {
            initCheckIn();
        } else if (index == 2) {
            initBill();
        } else {
            initAccount();
        }
    }

    INIT[index] = 1;
    LAST_TAB = index;
}

// userInfo
function getUserInfo() {

    $.ajax({
        type: "POST",
        url: "/user/getUserInfo",
        success: function (resp) {
            if (resp.status == true) {
                USER_INFO = resp.object;
                USER_ID = resp.info;

                var spans = $(".info_div").find("span");
                $(spans[0]).html(USER_INFO.username);
                spans[1].innerHTML = USER_INFO.sex + "，" + USER_INFO.birth + "，" + USER_INFO.level;
            }
        },
        error: function () {
            alert("获取用户信息失败")
        }
    });

}

// 我的预定
function initMyOrder() {
    var copy = $("#record_copy")[0];

    var future = $("#futureDiv");
    for (var i = 0; i < 2; i++) {
        var div = document.createElement("div");
        div.className = "each_record";
        div.innerHTML = copy.innerHTML;

        future.append($(div));
    }

    var history = $("#historyDiv");
    for (var j = 0; j < 4; j++) {
        var div = document.createElement("div");
        div.className = "each_record";
        div.innerHTML = copy.innerHTML;
        $($(div).find(".record_btn")[0]).hide();
        $($(div).find(".record_btn")[1]).hide();

        history.append($(div));
        history.hide();
    }
}

function changeMyOrder(index) {

    var tab = $("#myOrder").find(".sub_btn");
    tab[index].className = "sub_btn sub_btn_native";
    tab[(index + 1) % 2].className = "sub_btn";

    var parents = ["#futureDiv", "#historyDiv"];
    $(parents[(index + 1) % 2]).hide();
    $(parents[index]).slideDown(300);
}

function initCheckIn() {

    var parent = $("#checkIn");
    var copy = $("#checkIn_copy")[0];

    for (var j = 0; j < 4; j++) {
        var div = document.createElement("div");
        div.className = "each_record";
        div.innerHTML = copy.innerHTML;
        $($(div).find(".record_btn")[0]).hide();
        $($(div).find(".record_btn")[1]).hide();

        parent.append($(div));
    }
}

function initBill() {

    var parent = $("#bill");
    var billCopy = $("#bill_copy")[0];
    var itemCopy = $("#item_copy")[0];

    for (var i = 0; i < 3; i++) {
        var billDiv = document.createElement("div");
        billDiv.className = "bill_div";
        billDiv.innerHTML = billCopy.innerHTML;

        var itemParent = $(billDiv).find(".items_div");
        for (var j = 0; j < 5 - i; j++) {
            var itemDiv = document.createElement("div");
            itemDiv.className = "each_item";
            itemDiv.innerHTML = itemCopy.innerHTML;

            itemParent.append($(itemDiv));
        }

        parent.append($(billDiv));
    }
}

function initAccount() {

    var username = $("#myAccount").find("input")[0];
    username.value = USER_INFO.username;

    var sex = USER_INFO.sex;  ////
    var sexlbl = $("#myAccount").find("label");
    if (sex == "男") {
        $(sexlbl[0]).show();
    } else {
        $(sexlbl[1]).show();
    }

    var userId = $("#myAccount").find(".name_div").find("span")[0];
    userId.innerHTML = USER_ID;

    var info = $("#myAccount").find(".each_info");
    var birth = $(info[0]).find("input")[0];
    birth.value = USER_INFO.birth;
    var phone = $(info[0]).find("input")[1];
    phone.value = USER_INFO.phone;
    var mail = $(info[0]).find("input")[2];
    mail.value = USER_INFO.email;
    var credit = $(info[1]).find("input")[0];
    credit.value = USER_INFO.bankcard;

    var cost = 0; ////
    var spans = $(info[2]).find("span");
    spans[0].innerHTML = cost;
    spans[1].innerHTML = Math.floor(cost / 100);
    spans[2].innerHTML = USER_INFO.level;
    spans[3].innerHTML = 1000;
    spans[4].innerHTML = "黄金会员";
}

var infoOld = ["", "", "", "", ""]; //用户名, 性别, 生日, 手机号, 邮箱

function modAccount() {
    $($(".mod_btn")[0]).hide();
    $(".mod_con").show();

    var inputs = $("#myAccount").find("input");
    var sexlbl = $("#myAccount").find("label");
    sexlbl.show();
    if ($(sexlbl[0]).css("display") != "none") {
        infoOld[1] = "男";
    } else {
        infoOld[1] = "女";
    }

    for (var i = 0; i < inputs.length - 1; i++) {
        if ($(inputs[i]).attr("type") == "radio") {
            $(inputs[i]).show();
            if ($(inputs[i]).val() == infoOld[1]) {
                $(inputs[i]).attr("checked", "checked");
            }
        } else {
            $(inputs[i]).addClass("mod_state");
            if (i == 3) {
                $(inputs[3]).removeAttr("disabled");
            } else {
                $(inputs[i]).removeAttr("readonly");
            }
            if (i > 1) {
                infoOld[i - 1] = $(inputs[i]).val();
            } else {
                infoOld[i] = $(inputs[i]).val();
            }
        }
    }
}

function confirmAccount() {
    var infoNew = [];

    var inputs = $("#myAccount").find("input");
    var sexlbl = $("#myAccount").find("label");

    for (var i = 0; i < inputs.length - 1; i++) {
        if ($(inputs[i]).attr("type") == "radio") {
            if ($(inputs[i]).attr("checked") == "checked") {
                infoNew[1] = $(inputs[i]).val();
            }
            $(inputs[i]).hide();
        } else {
            if (i > 1) {
                infoNew[i - 1] = $(inputs[i]).val();
                if (i == 3) {
                    $(inputs[i]).attr("disabled", "disabled")
                }
            } else {
                infoNew[i] = $(inputs[i]).val();
            }
            $(inputs[i]).removeClass("mod_state");
            $(inputs[i]).attr("readonly", "readonly");
        }
    }
    if (infoNew[1] == "男") {
        $(sexlbl[1]).hide();
    } else {
        $(sexlbl[0]).hide();
    }

    // 更新数据库
    $.ajax({
        type: "POST",
        url: "/user/updateInfo",
        data: {
            username: infoNew[0],
            sex: infoNew[1],
            birth: infoNew[2],
            phone: infoNew[3],
            email: infoNew[4]
        },
        success: function () {
            $($(".mod_btn")[0]).show();
            $(".mod_con").hide();
        },
        error: function () {
            alert("更新失败");
        }
    });


}

function cancelAccount() {
    var inputs = $("#myAccount").find("input");
    var sexlbl = $("#myAccount").find("label");

    for (var i = 0; i < inputs.length - 1; i++) {
        if ($(inputs[i]).attr("type") == "radio") {
            $(inputs[i]).hide();
        } else {
            if (i == 3) {
                $(inputs[i]).attr("disabled", "disabled")
            }
            if (i > 1) {
                $(inputs[i]).val(infoOld[i - 1]);
            } else {
                $(inputs[i]).val(infoOld[i]);
            }
            $(inputs[i]).removeClass("mod_state");
            $(inputs[i]).attr("readonly", "readonly");
        }
    }
    if (infoOld[1] == "男") {
        $(sexlbl[1]).hide();
    } else {
        $(sexlbl[0]).hide();
    }
    $($(".mod_btn")[0]).show();
    $(".mod_con").hide();
}

var creditOld = "";
function changeCredit() {

    var input = $($("#myAccount").find(".each_info")[1]).find("input");
    input.addClass("mod_state");
    input.removeAttr("readonly");
    creditOld = input.val();
    $($(".exchange_card")[0]).hide();
    $(".credit_con").show();
}

function confirmCredit() {
    var input = $($("#myAccount").find(".each_info")[1]).find("input");
    var creditNew = input.val();
    if (creditNew == "") {
        return;
    }

    input.removeClass("mod_state");
    input.attr("readonly", "readonly");

    creditOld = "";

    // 存储
    $.ajax({
        type: "POST",
        url: "/user/updateBankcard",
        data: {
            bankcard: creditNew
        },
        success: function () {
            $(".credit_con").hide();
            $($(".exchange_card")[0]).show();
        },
        error: function () {
            alert("换卡失败");
        }
    });
}

function cancelCredit() {
    var input = $($("#myAccount").find(".each_info")[1]).find("input");
    input.removeClass("mod_state");
    input.attr("readonly", "readonly");
    input.val(creditOld);
    creditOld = "";

    $(".credit_con").hide();
    $($(".exchange_card")[0]).show();
}