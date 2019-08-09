//获取一组数据中的最大值和对小值（区间）

let a = [1,2,3,4,5,6]

//获取js中的最小值和最大值（交叉赋值）
let min = Number.MAX_VALUE
let max = Number.MIN_VALUE
for(let i=0,j=a.length;i<j;i++) {
	if (a[i] < min) {
	    min = a[i];
	}
	if (a[i] > max) {
	    max = a[i];
	}
}
/*-------------------------------------------------------------------------------*/
//根据不同的数据，显示不同的颜色（级别）
let count = [23,234,534,345]

let linesChartcolors = [
	'#00F8FF',
    '#00FF00',
    '#FFF800',
    '#FF0000'
]
let getColor = function (count) {
    let factor = (count - min) / (max - min)
    let index = Math.round(linesChartcolors.length * factor)
    return linesChartcolors[index]
}
/*-------------------------------------------------------------------------------*/
//获取当前时间的'YY-MM-DD'格式
Vue.prototype.$getDate = function(date) {
	let year = "";
	let month = "";
	let day = "";
	let now = date;
	year = "" + now.getFullYear();
	if((now.getMonth() + 1) < 10) {
		month = "0" + (now.getMonth() + 1);
	} else {
		month = "" + (now.getMonth() + 1);
	}
	if((now.getDate()) < 10) {
		day = "0" + (now.getDate());
	} else {
		day = "" + (now.getDate());
	}
	return year + "-" + month + "-" + day;
},
/*-------------------------------------------------------------------------------*/
//获取上周的第一天和最后一天
getLastWeekTime() {
    let date1 = new Date()
    let date2 = new Date()
    date1.setDate(date1.getDate() - date1.getDay() + 1 - 7)
    date2.setDate(date2.getDate() + 7 - date2.getDay() - 7)

    let year1 = date1.getFullYear()
    let month1 = date1.getMonth() + 1>10? date1.getMonth() + 1: '0' + (date1.getMonth() + 1) 
    let day1 = date1.getDate()

    let year2 = date2.getFullYear()
    let month2 = date2.getMonth() + 1>10? date2.getMonth() + 1: '0' + (date2.getMonth() + 1)
    let day2 = date2.getDate()

    let weekStart = year1 + '-' + month1 + '-' + day1
    let weekEnd = year2 + '-' + month2 + '-' + day2

    return [weekStart,weekEnd]
}
/*-------------------------------------------------------------------------------*/
//获取上个月的第一天和最后一天
getLastMonthDate() {
	let nowdays = new Date() 
    let year = nowdays.getFullYear()
    let month = nowdays.getMonth()
    if(month==0){
        month = 12
        year = year-1

    }
    if(month<10){
        month = '0' + month
    }
    
    let myDate = new Date(year,month,0)

    let startDate = year + '-' + month + '-01' //上个月第一天
    let endDate = year + '-' + month + '-' + myDate.getDate() //上个月最后一天

    return [startDate,endDate]
},
/*-------------------------------------------------------------------------------*/
权重优先级（A，B，C，D）
//解决：权重优先级的思想是，符合条件的权重值有无数个，重点是找到符合条件的那几个
//步骤：先找出必要条件，再拟定一个初始值，之后根据必要条件推导出其他值，由此可以看出权重是一个相对的概念
多星在前：C + D > A
优先级权重：A > B > C > D
两两相加或三三相加不相等且优先级大的在前：A + D > C + B 
//最大的和最小的相加不等于另外两个相加并且A的优先级最高
//最大和最小的相加大于另外两个相加，说明它加上更大的值也会大于另外两个相加（其中）