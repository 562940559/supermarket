function Login(){
	this.createDom();
	this.load();
	this.addListener();
};

Login.navTemplate = `
	<div class="from-login">
		<h2 style="margin: 0">欢迎登录超市账单管理系统</h2>
		<form>
			<p>用户名:<input type="text" id="userName_text" placeholder="请输入用户名"></p>
			<p>密&nbsp;&nbsp;&nbsp;码:<input type="password" id="password_text" placeholder="请输入密码"></p>
			<div class="form-group">
			    <label for="loginCaptcha">验证码:</label>
			    <div class="input-group" style="width: 200px">
			      <input type="text" class="form-control" name="captcha" id="loginCaptcha" placeholder="请输入验证码">
				  <span class="input-group-addon" id="captcha-info">正确</span>
				</div>
				<div class="captcha-container"></div>
			</div>
			<div class="clearfix"></div>
			<a href="javascript:;" id="login_button">登录</a>
			<a href="javascript:;" id="re_button">重置</a>
		</form>
	</div>
	`;

$.extend(Login.prototype,{
	//创建导航DOM节点
	createDom(){
		//将导航追加到login元素内部
		$(Login.navTemplate).appendTo("nav");
	},
	//页面加载
	load(){
		//显示验证码
		$.getJSON("/api/captcha",(data)=>{
			$(".captcha-container").html(data.res_body.data);
		})
	},
	//注册事件监听
	addListener(){
		//点击刷新验证码处理
		$(".captcha-container").on("click",this.load);
		//验证码文本框失去焦点,校验
		$("#loginCaptcha").on("blur",this.verify)
	},
	//校验验证码
	verify(){
		$.getJSON("/api/verify_captcha",{captcha:$("#loginCaptcha").val()},(data)=>{
			if(data.res_body.valid){
				$("#captcha-info").text("正确");
				console.log("1")
			}else{
				$("#captcha-info").text("错误")
			}
		})
	}
});

//创建头部login对象
new Login();