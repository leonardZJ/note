// startTime: new Date().frommat("YYYY-MM-DD")
// endTime: new Date().frommat("YYYY-MM-DD")


// let dtdate = new Date().frommat("YYYY-MM-DD")
// let dtdate = new Date().diffDate("DD",-1).frommat("YYYY-MM-DD");

// 地图加载资源包：http://44.104.93.81:35001/login    root 222222  内网
// js类库
// 应用数据可视化类：用于使用血脉图，迁徙图等
// mapabc引擎类库 压缩版：用于普通地图
// 使用：
// 将名称复制到n=...
// 版本号复制到v=...

//获取省内城市边界
// 'http://44.104.93.81:35001/as/search/district?query=&city=&level=city&ak=ec85d3648154874552835438ac6a02b2'
// 'npm install --save deck.gl luma.gl'
// 10-受理
// 20-受理中
// 30-处警中
// 40-已处警
// 50-已到达
// 60-已接收
// 70-已出动
// 80-已到场
// 90-已反馈
// 100-已终结
// 110-已归档 

//let max = Math.max.call(null,7,2,0,-3,5)


// 经度longitude
// 纬度latitude

//激活蓝色：#00c2ce;
//深蓝背景色：#16182d;
//半透明浅蓝背景色：background-color: rgba(41,45,74,.9);
//半透明深蓝背景色：background-color: rgba(22,24,45,.5);
//激活橙色：#f49602;
//灰白色文字：color: #697ba3;
//浅灰分隔线：border-bottom: 1px solid #3f4e6d;
//激活灰色：rgba(32,35,66,.72);


/*
获取地图样式（get）
'http://114.215.68.185:35001'+'/map/open/styles/list?start=0&length=30'
"mapabc79w"
"mapabc78b"
"mapabc78bw"
"mapabc81g"
"mapabc81gw"
"mapabc-wl"
"default"
"mapabc80"

var ajax = new XMLHttpRequest();
ajax.open('get','http://114.215.68.185:35001'+'/map/open/styles/list?start=0&length=30');
ajax.send();
ajax.onreadystatechange = function () {
   if (ajax.readyState==4 &&ajax.status==200) {
    	var data = (JSON.parse(ajax.responseText)).data;
    	console.log(data)
  　}

};

deck 三维地图方法对象
mapabcgl 二维地图方法对象
map.zoomIn() 放大
map.zoomOut() 缩小
map.setZoom(11) 设置地图放大级别
map.setPitch(45) 设置地图倾斜角度
map.setCenter([113,22]) 设置地图的中心点
map.getSource('xxxxx') 通过Source获取layer
map.getLayer('xxxxx') 通过Layer获取layer

//添加Marker
addMarker(el,lng,map) {
	let Marker = new mapabcgl.Marker(el)
	.setLngLat([111,222])
	.addTo(map)

	return Marker	
}
let Marker = new mapabcgl.Marker(el)
.setLngLat([111,222])
.addTo(map)

//删除Marker
Marker.remove()
Marker = null

//画线
DrawLine(id,coordinates,color) {
	map.addLayer({
		//id必须是字符串
	    "id": id,
	    "type": "line",
	    "source": {
	        "type": "geojson",
	        "data": {
	            "type": "Feature",
	            "properties": {},
	            "geometry": {
	                "type": "LineString",
	                "coordinates": coordinates
	            }
	        }
	    },
	    "layout": {
	        "line-join": "round",
	        "line-cap": "round"
	    },
	    "paint": {
	    	//color必须是字符串
	        "line-color": color,
	        "line-width": 8
	    }
	});	
}
//删线
removeLine(id){
    map.removeLayer(id)
    map.removeSource(id)
}


//视频参数
  var urlMap = {
        "1": ["/roadVideo.html#", "width=580,height=420,top=70,left=400"], //监控
        "2": ["/roadVideoS.html#", "width=1000,height=600,top=70,left=400"], //多个监控
        "3": ["/shijuVideo.html#", "width=580,height=420,top=70,left=400"], //治安视频
        "4": ["/shijuVideoS.html#", "width=1000,height=600,top=70,left=400"], //多个治安视频
        "5": ["/roadVideoQiu.html#", "width=580,height=420,top=70,left=400"] 

      }
//视频请求基础URL
var VIDEO_URL = 'http://44.104.93.61:8080/Portal/modules/video'

//多个传参时使用';'间隔
例：
v.netAddress + "," + .name + ";"
'http://44.104.93.61:8080/Portal/modules/video/roadVideoS.html#tongdaohao1,name1;tongdaohao2,name2'

//视频弹出扩展程序（用于在谷歌浏览器播放视频）
var chromeEextensionUrl = "chrome-extension://fnfnbeppfinmnjnjhedifcfllpcfgeea/navigate.html?chromeurl=[escape]";


var bv = Utils.getBrowserVerssion()
if(bv.browser == 'chrome' && bv.version.match('44.0.2403')) {
  
}

*/

let arr = [
	{name: 'aaa',price: 10},
	{name: 'bbb',price: 9},
	{name: 'ccc',price: 20},
	{name: 'ddd',price: 22},
	{name: 'fff',price: 5.5},
	{name: 'fff',price: 4.5},
	{name: 'fff',price: 5.5},
	{name: 'fff',price: 8},
	{name: 'fff',price: 8.5},
]
function CalSum(array,result) {
    for (var i = 1; i < 1 << array.length; i++)//从1循环到2^N
    {
        var sum=0;
        var temp = "";
        for (var j = 0; j <array.length; j++)
        {
            if ((i & 1 << j) != 0)//用i与2^j进行位与运算，若结果不为0,则表示第j位不为0,从数组中取出第j个数
            {
                sum += array[j];
                temp += array[j] + "+";
            }
        }
        if(sum>=result) {
            var t=temp.split('+')
            var p=[];
            for(var j=0;j<t.length;j++){
                if(t[j]!=''){
                    p.push(t[j])
                }
            }
            console.log(p)
        }


                }
}

var array=[1,2,3,4,5,6,7,8,9];
var result=10;
CalSum(array,result)
