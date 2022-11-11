// 图表信息处理
import BG4 from '@/assets/Index/earth2.jpg';
import { getRandomColor } from '@/utils';

/**
 * 系统信息统计
 */
export const systemInfomationData = () => {
    return {
        legend: {
            right: 0,
            top: 'center',
            orient: 'vertical',
            align: 'right',
        },
        tooltip: {
            show: true,
        },
        series: [
            {
                name: '系统信息统计',
                type: 'pie',
                radius: [0, 70],
                center: ['35%', '50%'],
                roseType: '',
                itemStyle: {
                    borderRadius: 5,
                },
                label: {
                    position: 'inside',
                },
                data: [
                    { value: 2000, name: '图表' },
                    { value: 1212, name: '数据集' },
                    { value: 4000, name: '组件' },
                    { value: 2211, name: '用户量' },
                    { value: 12121, name: '访问量' },
                    { value: 4346, name: '页面数量' },
                ],
            },
        ],
    }
}



export const systemUserData = () => {
    var colorList = [[
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
        ],
        [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ],
        [
        '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
        '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51', 
        '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe', 
        '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
        ]][2];
    return {
        // 图表标题
        title: {
            show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
            text: '"产品生态"主题图谱',//主标题文本，'\n'指定换行
            x: 'center',        // 水平安放位置，默认为左对齐，可选为：
                              // 'center' ¦ 'left' ¦ 'right'
                              // ¦ {number}（x坐标，单位px）
            y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
                              // 'top' ¦ 'bottom' ¦ 'center'
                              // ¦ {number}（y坐标，单位px）
            //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: '#ccc',    // 标题边框颜色
            borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
            padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                    // 接受数组分别设定上右下左边距，同css
            itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
            textStyle: {
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#333'        // 主标题文字颜色
            },
            subtextStyle: {
                color: '#aaa'        // 副标题文字颜色
            }
        },
        backgroundColor: '#fff',
        tooltip: {},
        animationDurationUpdate: function(idx: any) {
            // 越往后的数据延迟越大
            return idx * 100;
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 500,
                edgeLength: 10
            },
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            data: [{
                "name": "新冠肺炎愈后一般6个月内不会再得",
                "value": 2373,
                "symbolSize": 48,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[0],
                        "color": colorList[0]
                    }
                }
            }, {
                "name": "女篮两连胜后大喊武汉加油",
                "value": 5449,
                "symbolSize": 73,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[1],
                        "color": colorList[1]
                    }
                }
            }, {
                "name": "火神山医院开微博",
                "value": 2289,
                "symbolSize": 67,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[2],
                        "color": colorList[2]
                    }
                }
            }, {
                "name": "医疗队女队员集体理平头和光头",
                "value": 2518,
                "symbolSize": 50,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[3],
                        "color": colorList[3]
                    }
                }
            }, {
                "name": "缅怀疫情中逝去的人们",
                "value": 4730,
                "symbolSize": 88,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[4],
                        "color": colorList[4]
                    }
                }
            }, {
                "name": "妨害疫情防控的违法行为",
                "value": 1952,
                "symbolSize": 55,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[5],
                        "color": colorList[5]
                    }
                }
            }, {
                "name": "66岁重症患者8天快速康复",
                "value": 926,
                "symbolSize": 70,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[6],
                        "color": colorList[6]
                    }
                }
            }, {
                "name": "别让快递小哥一直等在寒风中",
                "value": 4536,
                "symbolSize": 67,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[7],
                        "color": colorList[7]
                    }
                }
            }, {
                "name": "湖北以外地区新增病例数连降5天",
                "value": 750,
                "symbolSize": 47,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[8],
                        "color": colorList[8]
                    }
                }
            }, {
                "name": "女儿写给战疫一线爸爸的信",
                "value": 493,
                "symbolSize": 82,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[9],
                        "color": colorList[9]
                    }
                }
            }, {
                "name": "青海连续3天无新增病例",
                "value": 385,
                "symbolSize": 59,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[10],
                        "color": colorList[10]
                    }
                }
            }, {
                "name": "辽宁再派1000名医护人员驰援武汉",
                "value": 4960,
                "symbolSize": 90,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[11],
                        "color": colorList[11]
                    }
                }
            }, {
                "name": "抗击新型肺炎第一线",
                "value": 8694000,
                "symbolSize": 134,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[12],
                        "color": colorList[12]
                    }
                }
            }, {
                "name": "12项疫情防控惠民政策",
                "value": 5668,
                "symbolSize": 75,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[13],
                        "color": colorList[13]
                    }
                }
            }, {
                "name": "战疫一线的别样团圆",
                "value": 339,
                "symbolSize": 68,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[14],
                        "color": colorList[14]
                    }
                }
            }, {
                "name": "31省区市心理援助热线",
                "value": 671,
                "symbolSize": 62,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[15],
                        "color": colorList[15]
                    }
                }
            }, {
                "name": "元宵节亮灯为武汉加油",
                "value": 27000,
                "symbolSize": 114,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[16],
                        "color": colorList[16]
                    }
                }
            }, {
                "name": "抗击新型肺炎我们在行动",
                "value": 10777000,
                "symbolSize": 130,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[17],
                        "color": colorList[17]
                    }
                }
            }, {
                "name": "疫情中的逆行者",
                "value": 92000,
                "symbolSize": 123,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[18],
                        "color": colorList[18]
                    }
                }
            }, {
                "name": "一张图看懂新冠肺炎",
                "value": 20000,
                "symbolSize": 141,
                "draggable": true,
                "itemStyle": {
                    "normal": {
                        "shadowBlur": 100,
                        "shadowColor": colorList[19],
                        "color": colorList[19]
                    }
                },
                "url": "https://gallery.echartsjs.com/preview.html?c=xPLngHx_Z&v=1"
            }]
        }]
    };
}

export const growData = () => {
    return {
        color: getRandomColor(),
        grid: {
            top: '20px',
            right: 0,
            bottom: '20px'
        },
        tooltip: {
            show: true
        },
        xAxis: {
            type: 'category',
            data: [
                '2021-10',
                '2021-11',
                '2021-12',
                '2022-01',
                '2022-02',
                '2022-03',
                '2022-04',
                '2022-05',
                '2022-06',
                '2022-07',
                '2022-08',
                '2022-09',
            ],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 120, 200, 150, 80, 130],
                type: 'bar',
                itemStyle: {
                    borderRadius: [8, 8, 0, 0]
                },
                showBackground: true,
            },
        ],
    }
}

export const growRoateData = () => {
    return {
        color: getRandomColor(),
        tooltip: {
            show: true,
            trigger: 'axis'
        },
        grid: {
            top: '20px',
            right: 0,
            bottom: '20px'
        },
        xAxis: {
            type: 'category',
            data: [
                '2021-10',
                '2021-11',
                '2021-12',
                '2022-01',
                '2022-02',
                '2022-03',
                '2022-04',
                '2022-05',
                '2022-06',
                '2022-07',
                '2022-08',
                '2022-09',
            ],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 120, 200, 150, 80, 130],
                type: 'line',
                showBackground: true,
            },
        ],
    }
}

