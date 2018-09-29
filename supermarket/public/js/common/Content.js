function Content(){
	this.createDom();
    this.exit();
};

Content.navTemplate = `<!-- 左侧竖状导航条 -->
    <div class="left-content">
        <div class="list-group col-md-2 text-center" style="margin-left: 60px;" id="left_nav">
            <p class="list-group-item" style="background: rgb(248,248,248);font-weight: 700;font-size: 20px;">功能列表</p>
            <a class="list-group-item" href="/index.html"><img src="/imgs/zd.png">账单管理</a>
            <a class="list-group-item" href="/html/Supplier_manage.html"><img src="/imgs/gys.png">供应商管理</a>
            <a class="list-group-item" href="/html/User_manage.html"><img src="/imgs/yh.png">用户管理</a>
            <a class="list-group-item" href="/html/Password_change.html"><img src="/imgs/mm.png">密码修改</a>
            <a class="list-group-item" href="javascript:;" id="exit_system"><img src="/imgs/tc.png">退出系统</a>
        </div>
    </div>`;

$.extend(Content.prototype,{
	createDom(){
		$(Content.navTemplate).appendTo("section");
	},
    exit(){
        $("#exit_system").on("click",function(){
            if(confirm("您确定要退出系统吗?")){
                window.location.href = "about:blank";
            }
        })
    }
});

new Content();