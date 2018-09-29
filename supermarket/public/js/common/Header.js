function Header(){
	this.createDom();
	this.updateTime();
};

//头部导航的布局DOM节点
Header.navTemplate = `
	<nav class="navbar navbar-default" id="header_nav">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10">
                    <img src="/imgs/buy.png">
                    <span>超市账单管理系统</span>
                </div>
                <div class="col-md-2 text-right">
                    <h1 class="username">欢迎你,<span>aa</span></h1>
                    <a href="/html/Login.html" id="btn_botton"><button type="button" class="btn btn-success">登录</button></a>
                    <a href="javascript:;" class="hide" id="logout_botton"><button type="button" class="btn btn-success">退出</button></a>
                </div>
            </div>
        </div>
    </nav>
    <!-- 显示时间及提示的div -->
    <div class="container-fluid" id="header_Tips">
        <div class="row">
            <div class="col-md-3">
                <img src="/imgs/time.png">
                <span id="time1"></span>
            </div>
            <div class="col-md-9 text-right">
                <p>温馨提示:为了能正常浏览，请使用高版本浏览器！(IE10+)</p>
            </div>
        </div>
    </div>
	`;

$.extend(Header.prototype,{
	updateTime(){
		//实时更新时间的JS
		function mytime(){
		    var a = new Date();
		    var b = a.toLocaleTimeString();
		    var c = a.toLocaleDateString();
		    document.getElementById("time1").innerHTML = c+"&nbsp"+b;
		}
		//刷新就调用一次,不然有延迟
		new mytime();
		//每秒刷新
		setInterval(function() {
			mytime()
		},1000);
	},
	//创建导航DOM节点
	createDom(){
		//将导航追加到header元素内部
		$(Header.navTemplate).appendTo("header");
	}
});

//创建头部header对象
new Header();