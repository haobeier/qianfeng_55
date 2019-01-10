$(document).ready(function() {
	// 把生成的图表挂载到barEchart的div中
	var myChart = echarts.init(document.getElementById("barEchart"));

	var legendData = [ '男', '女', '保密' ];// 图例
	var colors = [ '#5793f3', '#d14a61', '#675bba' ];// 图例颜色

	var option = {
		color : colors,
		// 移动到柱体时有阴影的效果
		tooltip : {
			trigger : 'axis',
			axisPointer : { // 坐标轴指示器，坐标轴触发有效
				type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		// 图表离右边框的距离
		grid : {
			right : '20%'
		},
		// 右边的三个小工具
		toolbox : {
			feature : {
				dataView : {
					show : true,
					readOnly : false
				},
				restore : {
					show : true
				},
				saveAsImage : {
					show : true
				}
			}
		},
		// 图表上显示的分类信息
		legend : {
            data : []
        },
		// X轴显示的内容
		// option.xAxis[0].data
		xAxis : [ {
			type : 'category',
			axisTick : {
				alignWithLabel : false
			// 刻度与分类的位置
			},
			data : []
		} ],
		// Y轴显示的三个刻度条
		yAxis : [ {
			type : 'value',
			name : '',
			// min: 0,
			// max: 250,
			position : 'right',
			axisLine : {
				lineStyle : {
					color : colors[0]
				}
			},
			axisLabel : {
				formatter : '{value} 个'
			}
		}, {
			type : 'value',
			name : '',
			/*
			 * min: 0, max: 250,
			 */
			position : 'right',
			offset : 80,
			axisLine : {
				lineStyle : {
					color : colors[1]
				}
			},
			axisLabel : {
				formatter : '{value} 个'
			}
		}, {
			type : 'value',
			name : '',
			/*
			 * min: 0, max: 25,
			 */
			position : 'left',
			axisLine : {
				lineStyle : {
					color : colors[2]
				}
			},
			axisLabel : {
				formatter : '{value} 个'
			}
		} ],
		// 移动柱体时旁边小图框展示的数据
		series : [ {
			name : '',
			type : 'bar',// line
			data : []
		}, {
			name : '',
			type : 'bar',
			yAxisIndex : 1,
			data : []
		}, {
			name : '',
			type : 'bar',
			yAxisIndex : 2,
			data : []
		} ]
	};

	//统计每个省份各个性别的人数
	$.getJSON("/user/userSexTongJi",function (data) {
		//{"list":[{"provinceName":"上海市","secret":0,"girl":0,"boy":1},{"provinceName":"北京市","secret":0,"girl":1,"boy":0},{"provinceName":"天津市","secret":1,"girl":0,"boy":0},{"provinceName":"广东省","secret":0,"girl":0,"boy":1},{"provinceName":"浙江省","secret":0,"girl":0,"boy":1},{"provinceName":"福建省","secret":0,"girl":0,"boy":1}],"isSuccess":true}
    	if(data.isSuccess==true){
            var listes = data.list;
            //取省份名称
            var provinceNames = [];
            var seriesBoyArray=[];
            var seriesGirlArray=[];
            var seriesSecretArray=[];

            //表示最多的性别的人数  3,4,5
            var max = 0;

            for(var i=0;i<listes.length;i++) {
                var item = listes[i];
                provinceNames[i] = item['provinceName'];
                seriesBoyArray[i] = item['boy'];
                seriesGirlArray[i] = item['girl'];
                seriesSecretArray[i] = item['secret'];

                if (seriesBoyArray[i] > max) {
                    max = seriesBoyArray[i];
                }

                if (seriesGirlArray[i] > max) {
                    max = seriesGirlArray[i];
                }

                if (seriesSecretArray[i] > max) {
                    max = seriesSecretArray[i];
                }
            }

            //给图例赋值
			option.legend.data = legendData;
            //给x轴赋值
			option.xAxis[0].data = provinceNames;
			//给Y轴的图例和最大刻度值赋值
			option.yAxis[0].name =legendData[0];
			option.yAxis[0].max = max;
            option.yAxis[1].name =legendData[1];
            option.yAxis[1].max = max;
            option.yAxis[2].name =legendData[2];
            option.yAxis[2].max = max;
            //给series赋值
			//{"provinceName":"上海市","secret":0,"girl":0,"boy":1},{"provinceName":"北京市","secret":0,"girl":1,"boy":0},{"provinceName":"天津市","secret":1,"girl":0,"boy":0},{"provinceName":"广东省","secret":0,"girl":0,"boy":1},{"provinceName":"浙江省","secret":0,"girl":0,"boy":1},{"provinceName":"福建省","secret":0,"girl":0,"boy":1}
			option.series[0].name=legendData[0];//男
			option.series[0].data = seriesBoyArray;//1,0,0,1,1,1
            option.series[1].name=legendData[1];//女
            option.series[1].data = seriesGirlArray;//0,1,0,0,0,0
            option.series[2].name=legendData[2];//保密
            option.series[2].data = seriesSecretArray;//0,0,1,0,0,0

            myChart.setOption(option);
		}
	})
});