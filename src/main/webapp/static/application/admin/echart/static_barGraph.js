$(document).ready(function() {
	
 /*
	var nextLevel = new Object();
	nextLevel.name = '陈小涛';
	nextLevel.sex = '男';
	
	var nextLevel = {name:"陈小涛",sex:"男"};
	
	 var hobby = new Array();
	    hobby[0]="篮球";
	    hobby[1]="足球";
	    
	  var hobby=['篮球','足球'];

	*/
	
	 
	/*var obj = new Object();
	
	
	var nextLevel = new Object();
	nextLevel.name = '陈小涛';
	nextLevel.sex = '男';
	var hobby = new Array();
	    hobby[0]="篮球";
	    hobby[1]="足球";
	nextLevel.hobby =hobby;
	
	obj.param1 = nextLevel
	var name= obj.param1.name;
	var sex= obj.param1.sex;
	var hobby1 = obj.param1.hobby[1];*/
	//alert(hobby1);
	
	
	
	/*var obj1 = {param1:{name:"陈小涛",sex:"男",hobby:['篮球','足球']}};
	var hobby11 = obj1.param1.hobby[1];;*/
	//alert(hobby11);
	
	

	var myChart = echarts.init(document.getElementById("barEchart"));


	var colors = ['#5793f3', '#d14a61', '#675bba'];

	var option = {
	    color: colors,
	    //鼠标移上柱体时的阴影
	    tooltip: {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效  
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
	    },
	    //图表离右边框的距离 
	    grid: {
	        right: '20%'
	    },
	    //右上角的三个工具
	    toolbox: {
	        feature: {
	            dataView: {show: true, readOnly: false},
	            restore: {show: true},
	            saveAsImage: {show: true}
	        }
	    },
	    //图例
	    legend: {
	        data:['蒸发量','降水量','平均温度']
	    },
	    //X轴
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {
	                alignWithLabel: true//刻度与分类的位置
	            },
	            //X轴上的显示的数据
	            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    //Y轴
	    yAxis: [
	        {
	            type: 'value',
	            name: '蒸发量',
	            min: 0,
	            max: 250,
	            //展示的位置
	            position: 'right',
	            //轴线的颜色 
	            axisLine: {
	                lineStyle: {
	                    color: colors[0]
	                }
	            },
	            //轴线上的文字{value}为固定的写法
	            axisLabel: {
	                formatter: '{value} ml'
	            }
	        },
	        {
	            type: 'value',
	            name: '降水量',
	            min: 0,
	            max: 250,
	            position: 'right',
	            offset: 80,
	            axisLine: {
	                lineStyle: {
	                    color: colors[1]
	                }
	            },
	            axisLabel: {
	                formatter: '{value} ml'
	            }
	        },
	        {
	            type: 'value',
	            name: '温度',
	            min: 0,
	            max: 25,
	            position: 'left',
	            axisLine: {
	                lineStyle: {
	                    color: colors[2]
	                }
	            },
	            axisLabel: {
	                formatter: '{value} °C'
	            }
	        }
	    ],
	    //移动柱体时旁边小图框展示的数据 
	    series: [
	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            yAxisIndex: 1,
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        },
	        {
	            name:'平均温度',
	            type:'line',
	            yAxisIndex: 2,
	            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
	        }
	    ]
	};
	
	 myChart.setOption(option);
	
});