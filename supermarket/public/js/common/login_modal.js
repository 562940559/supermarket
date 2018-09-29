//登录模态框
function LoginModal(){
	this.createDom();
	this.addListener();
};

//模态框DOM节点模板创建
LoginModal.modalTemplate = `<div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
		        <h4 class="modal-title" id="loginModalLabel">用户登录</h4>
		      </div>
		      <div class="modal-body">
		      <div class="alert alert-danger hidden login-error">用户名或密码错误</div>
		      	<!-- 表单 -->
		      	<form class="login-form">
				  <div class="form-group">
				    <label for="loginUsername">用户名</label>
				    <input type="text" class="form-control" name="username" id="loginUsername" placeholder="请输入用户名">
				  </div>
				  <div class="form-group">
				    <label for="loginPassword">密码</label>
				    <input type="password" class="form-control" name="password" id="loginPassword" placeholder="请输入密码">
				  </div>
				</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
		        <button type="button" class="btn btn-primary btn-login">登录</button>
		      </div>
		    </div>
		  </div>
		</div>`;

$.extend(LoginModal.prototype,{
	//创建DOM节点
	createDom(){
		$(LoginModal.modalTemplate).appendTo("body");
	},
	//注册事件监听
	addListener(){
		$(".btn-login").on("click",this.loginHandler);
	},
	/*//登录处理
	loginHandler(){
		const url = "http://rap2api.taobao.org/app/mock/86309/api/user/login",//URL
				data = $(".login-form").serialize();//向服务器提交的数据
				console.log(data);
		$.post(url,data,(data)=>{
			console.log(data);
			//处理响应数据
			if(data.res_code===1){//登陆成功
				//将登录成功的用户信息保存到sessionStorage中
				sessionStorage.loginUser = JSON.stringify(data);
				console.log(data)
			}else{//登录失败
				$(".login-error").removeClass("hidden");
			}
		});
	}*/
});