<%--
  Created by IntelliJ IDEA.
  User: L.H.S
  Date: 2017/3/7
  Time: 20:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>财务统计</title>

    <link href="../../css/css_reset.css" rel="stylesheet">
    <link href="../../css/common.css" rel="stylesheet">
    <link href="http://cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

</head>
<body>

<div class="nav_bar">
    <div class="logo_div">
        <img src="../../image/logo_white.png">
    </div>
    <div class="sub_nav" onclick="window.location.href='Approval.jsp'">审批</div>
    <div class="sub_nav native">财务统计</div>
    <div class="message_div" onclick="logout()">
        <i class="fa fa-sign-out"></i>
    </div>
</div>


<div class="bottom_nav" style="margin-top: 0;">@CopyRight howSure</div>
<script src="../../js/jquery.js"></script>
<script src="../../js/approval.js"></script>
</body>
</html>
