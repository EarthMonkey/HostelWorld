/**
 * Created by L.H.S on 2017/2/1.
 */
var KEY = 0;

function changeKey(index) {
    KEY = index;
    var keyPlace = ["地区", "店名"];

    $(".key_btn")[index].className = "key_btn key_selected";
    $(".key_btn")[(index + 1) % 2].className = "key_btn";
    var placeholder = "按" + keyPlace[index] + "搜索hostel";
    $(".search_input").attr("placeholder", placeholder);
}