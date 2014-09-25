'use strict';
/**
* Created by apple-tc on 14-8-29.
*/
angular.element(document).ready(function(){


    function setupSummaryChart(){
        var browserData=[
            {"name":"收入","y":589320.34,"color":"#7cb5ec"},
            {"name":"成本","y":394542.14,"color":"#f7a35c"},
            {"name":"费用","y":89999.86,"color":"#F8587C"},
            {"name":"利润","y":194778.20,"color":"#50C982"}
        ]
        var versionsData=[
            {"name":"收入","y":589320.34,"color":"#98C3EB"},
            {"name":"成本","y":394542.14,"color":"#F5B581"},
            {"name":"办公","y":4323.16,"color":"#F8587C"},
            {"name":"市场","y":32341.86,"color":"#F75A7B"},
            {"name":"人力","y":33452.96,"color":"#F7647B"},
            {"name":"财务","y":12344.04,"color":"#F7787B"},
            {"name":"其他","y":6999.12,"color":"#F7827B"},
            {"name":"费用","y":89999.86,"color":"#50E766"},
            {"name":"纯利润","y":104778.34,"color":"#A9FF97"}
        ]

        // Create the chart
        $('#sodo-financial-summary').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                text: ''
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '元'
            },
            series: [{
                name: '合计',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: '合计',
                data: versionsData,
                size: '90%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '元'  : null;
                    }
                }
            }]
        });
    }
    setupSummaryChart();

    /**
    $('#sodo-financial-summary').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: true,
            spacingLeft:0,
            marginLeft:0
        },
        title: {
            text:'',
            align: 'center'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        colors:['#95ceff','#ffbc75','#a9ff97','#50c982'],
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: '2014年财务摘要',
            innerSize: '50%',
            data: [
                ['收入',589320.34],
                ['支出',394542.14],
                ['利润',194778.20],
                ['纯利润',124778.34]
            ]
        }]
    });
    */

    $('#sodo-incoming-line-chart').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '2014年收入统计'
        },
        xAxis: [{
            categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}万元',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '利润',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '收入',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} 万元',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: '收入',
            type: 'spline',
            yAxis: 1,
            data: [102.343, 100.456, 130.321, 149.034, 122.345, 160.324, 154.348, 194.365, 200.213, 180.308, 174.924, 129.63],
            tooltip: {
                valueSuffix: ' 万元'
            }

        }, {
            name: '利润',
            type: 'spline',
            data: [20.123, 20.021, 28.432, 30.313, 25.321, 28.341, 25.238, 35.522, 38.432, 35.345, 33.423, 21.932],
            tooltip: {
                valueSuffix: ' 万元'
            }
        }]

    });

    $('#sodo-incoming-volume-chart').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '2014年成交量及收入统计'
        },
        xAxis: [{
            categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value} 单',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '成交量',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '利润',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}万元',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: '收入',
            type: 'column',
            yAxis: 1,
            data: [102.343, 100.456, 130.321, 149.034, 122.345, 160.324, 154.348, 194.365, 200.213, 180.308, 174.924, 129.63],
            tooltip: {
                valueSuffix: ' 万元'
            }

        }, {
            name: '成交量',
            type: 'column',
            data: [20, 20, 28, 30, 25, 28, 25, 35, 38, 35, 33, 21],
            tooltip: {
                valueSuffix: ' 单'
            }
        }]

    });



    $('#sodo-incoming-bar-chart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '2014年同比收入统计'
        },
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            min: 0,
            title: {
                text: '收入 (万元)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} 万元</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '2013',
            data: [93.243, 90.127, 106.490, 112.209, 142.104, 132.500, 135.643, 134.523, 168.498, 135.643, 160.643, 119.443]

        }, {
            name: '2014',
            data: [102.343, 100.456, 130.321, 149.034, 122.345, 160.324, 154.348, 194.365, 200.213, 180.308, 174.924, 129.63]

        }]
    });

    $('#sodo-expense-chart').highcharts({
        title: {
            text: '2014年费用统计'
        },
        xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        labels: {
            items: [{
                html: '总费用',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: '办公',
            data: [3234.12, 4021.21, 4012.23, 3923.32, 5021.34,3234.12, 3823.11, 4323.16, 4920.32, 5129.74,4294.92, 4124.11]
        }, {
            type: 'column',
            name: '市场',
            data: [37361.26, 42941.86, 21341.16, 37541.00, 12041.89,30301.87,22841.26,31341.43,37349.80,41341.43,42342.93,47341.16]
        }, {
            type: 'column',
            name: '人力',
            data: [30452.06, 31322.23, 33652.56, 35031.96, 36942.92, 39430.35, 36493.93, 33452.96,31452.35, 39537.91, 33482.31, 35455.76]
        },{
            type: 'column',
            name: '财务',
            data: [10244.14, 11334.35, 15352.05, 17454.06, 13535.01, 14321.67, 16436.94, 12344.04,16324.21, 14325.67, 11236.98, 14343.23]
        },{
            type: 'column',
            name: '其他',
            data: [7429.23, 4532.05, 3246.14, 75424.89, 3243.42, 5464.12, 5234.47, 6999.12,4543.14, 4532.23, 3543.92, 3427.43]
        }, {
            type: 'spline',
            name: '平均',
            data: [79342.34, 78342.34, 70342.34, 89342.34, 72342.34,73342.34,70342.34, 68342.34, 70042.34, 72342.34, 72922.19,80342.34],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: '总费用',
            data: [{
                name: '办公',
                y: 48252.34,
                color: Highcharts.getOptions().colors[0] // Jane's color
            }, {
                name: '市场',
                y: 449332.42,
                color: Highcharts.getOptions().colors[1] // John's color
            }, {
                name: '人力',
                y: 365323.27,
                color: Highcharts.getOptions().colors[3] // Joe's color
            },{
                name: '财务',
                y: 124492.94,
                color: Highcharts.getOptions().colors[4] // Joe's color
            },{
                name: '其他',
                y: 89421.84,
                color: Highcharts.getOptions().colors[5] // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
});