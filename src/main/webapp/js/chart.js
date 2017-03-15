/**
 * Created by L.H.S on 2017/3/15.
 */

function getManagerBar(id, data) {

    var myChart = echarts.init(document.getElementById(id));

    var names = data.hostelNames;
    var sales = data.sales;

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['线上订单额(百元)', '线下经营额(百元)','订单笔数','入住人次']
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: names
        },
        series: [
            {
                name: '线上订单额',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: sales[0]
            },
            {
                name: '线下经营额',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: sales[1]
            },
            {
                name: '订单笔数',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: sales[2]
            },
            {
                name: '入住人次',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: sales[3]
            }
        ]
    };

    myChart.setOption(option);
}