function Password_change(){
	this.createDom();
	this.changeLeftActive();
}

Password_change.navTemplate = `
	<div class="please_login hide">
        <div class="col-md-9">
            <ul class="list-group">
                <p class="list-group-item active">功能详情</p>
                <div class="list-group-item">
                    <img src="imgs/clock.jpg">
                    <p>欢迎来到超市账单管理系统，请<a href="html/Login.html">登录</a>！</p>
                </div>
            </ul>
        </div>
    </div>

    <div class="right-content">
    	<div class="col-md-9">
    		<div class="list-group">
    			<p class="list-group-item list_title">
    				<img src="/imgs/home.png">
    				你现在所在的位置是:<span class="text-primary"> 密码修改界面</span>
    			</p>
    		</div>
    		<form class="login-form">
				<div class="form-group">
					<label for="oldPass">旧密码</label>
					<input type="text" class="form-control" name="old" id="oldPass" placeholder="请输入原密码">
				</div>
				<div class="form-group">
					<label for="newPass">新密码</label>
					<input type="password" class="form-control" name="new" id="newPass" placeholder="请输入新密码">
				</div>
				<div class="form-group">
					<label for="checkNew">确认新密码</label>
					<input type="password" class="form-control" name="check" id="checkNew" placeholder="请输入确认新密码,且保证和新密码一致">
				</div>
					<button type="button" class="btn btn-primary" data-dismiss="modal">保存</button>
			</form>
    	</div>
    </div>
`;

$.extend(Password_change.prototype,{
	createDom(){
		$(Password_change.navTemplate).appendTo("article");
	},
	changeLeftActive(){
		//添加高亮提示
		$($("#left_nav").children("a").get(3)).addClass("active");
	}
});

new Password_change();