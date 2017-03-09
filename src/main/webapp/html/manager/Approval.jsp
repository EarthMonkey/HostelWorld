<%--
  Created by IntelliJ IDEA.
  User: L.H.S
  Date: 2017/3/7
  Time: 20:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>审批</title>

    <link href="../../css/css_reset.css" rel="stylesheet">
    <link href="../../css/common.css" rel="stylesheet">
    <link href="http://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="../../css/myworld.css" rel="stylesheet">
</head>
<body>

<div class="nav_bar">
    <div class="logo_div">
        <img src="../../image/logo_white.png">
    </div>
    <div class="sub_nav native">审批</div>
    <div class="sub_nav" onclick="window.location.href='ManagerFinance.jsp'">财务统计</div>
    <div class="message_div">
        <img src="../../image/message.png">
    </div>
</div>

<div class="above_part">
    <div style="margin-top: 35px; margin-left: 65px;">
        <div class="portrait_div"></div>

        <div class="info_div">
            <span style="font-size: 24px; color: #2b2b2b;">howSure</span><br>
            <span>总经理</span>
        </div>
    </div>

    <div style="margin-top: 35px; margin-left: 65px;">
        <div class="sub_title">
            <div class="inner_div sub_native" style="width: 70px;" onclick="changeTab(0)">待审批</div>
        </div>
        <div class="sub_title">
            <div class="inner_div" style="width: 70px;" onclick="changeTab(1)">已审批</div>
        </div>
    </div>
</div>

<div class="below_part">

    <%-- 待审批 --%>
    <div id="toApprove" class="sub_div">

    </div>

    <%-- 已审批 --%>
    <div id="hasApprove" class="sub_div">

    </div>
</div>


<div class="bottom_nav" style="margin-top: 0;">@CopyRight howSure</div>

<script src="../../js/jquery.js"></script>
<script src="../../js/approval.js"></script>
</body>
</html>
