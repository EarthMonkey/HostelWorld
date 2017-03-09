/**
 * Created by L.H.S on 2017/2/2.
 */

var INIT = [1, 0, 0, 0];  // 用来判断是否第一次加载数据

window.onload = function () {
    initMyOrder();
    initAccount(); //////
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
    username.value = "李昊朔";

    var sex = "男";  ////
    var sexlbl = $("#myAccount").find("label");
    if (sex == "男") {
        $(sexlbl[0]).show();
    } else {
        $(sexlbl[1]).show();
    }

    var userId = $("#myAccount").find(".name_div").find("span")[0];
    userId.value = "7654321";

    var info = $("#myAccount").find(".each_info");
    var birth = $(info[0]).find("input")[0];
    birth.value = "1996-11-29";
    var phone = $(info[0]).find("input")[1];
    phone.value = "15250928032";
    var mail = $(info[0]).find("input")[2];
    mail.value = "howSurely@foxmail.com";
    var credit = $(info[1]).find("input")[0];
    credit.value = "633333333333";

    var cost = 2345; ////
    var spans = $(info[2]).find("span");
    spans[0].innerHTML = cost;
    spans[1].innerHTML = Math.floor(cost / 100);
    spans[2].innerHTML = "黄金会员";
    spans[3].innerHTML = 1000;
    spans[4].innerHTML = "钻石会员";
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
    $($(".mod_btn")[0]).show();
    $(".mod_con").hide();
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
    
    $(".credit_con").hide();
    $($(".exchange_card")[0]).show();
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