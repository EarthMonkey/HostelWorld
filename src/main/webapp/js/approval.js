/**
 * Created by L.H.S on 2017/3/7.
 */

function changeTab(index) {

    if (index == 0) {
        $("#toApprove").show();
        $("#hasApprove").hide();
    } else {
        $("#toApprove").hide();
        $("#hasApprove").show();
    }

    $($(".inner_div")[index]).addClass("sub_native");
    $($(".inner_div")[(index + 1) % 2]).removeClass("sub_native");
}