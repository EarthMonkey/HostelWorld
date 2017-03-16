<%--
  Created by IntelliJ IDEA.
  User: L.H.S
  Date: 2017/3/7
  Time: 20:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>财务统计</title>

    <link href="../../css/css_reset.css" rel="stylesheet">
    <link href="../../css/common.css" rel="stylesheet">
    <link href="http://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../../css/manager.css" rel="stylesheet">
</head>
<body>

<div class="nav_bar">
    <div class="logo_div">
        <img src="../../image/logo_white.png">
    </div>
    <div class="sub_nav" onclick="window.location.href='HostelBusiness.jsp'">业务</div>
    <div class="sub_nav native">财务统计</div>
    <div class="message_div" onclick="logout()">
        <i class="fa fa-sign-out"></i>
    </div>
</div>

<div class="total_div">
    <div class="each_total">
        <img src="../../image/time.svg">
        <div>
            已加盟<span>15</span>天
        </div>
    </div>
    <div class="each_total">
        <img src="../../image/sales.svg">
        <div>
            总销售额<span>20000</span>元
        </div>
    </div>
    <div class="each_total">
        <img src="../../image/trades.svg">
        <div>
            总入住<span>200</span>人次
        </div>
    </div>
</div>

<div id="chartDiv" class="chart_div"></div>

<div class="bottom_nav" style="margin-top: 0;">@CopyRight howSure</div>

<script src="../../js/jquery.js"></script>
<script src="../../js/hostelfinance.js"></script>
<script src="../../js/chart.js"></script>
<script src="../../js/echarts.min.js"></script>

</body>
</html>
