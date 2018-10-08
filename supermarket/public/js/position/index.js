function index(){
	this.createDom();
	this.changeLeftActive();
}

index.navTemplate = `
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
    				你现在所在的位置是:<span class="text-primary"> 账单管理界面</span>
    			</p>
    		</div>
    		<div class="form-inline list-group manage_select">
			    <label for="exampleInputName2">商品名称:</label>
			    <input type="text" class="form-control" id="exampleInputName2" placeholder="请输入商品名称">
			    <label for="exampleInputName2">供应商:</label>
			    <select class="form-control">
				  <option>--请选择--</option>
				  <option>2</option>
				  <option>3</option>
				  <option>4</option>
				  <option>5</option>
				</select>
				<label for="exampleInputName2">是否付款:</label>
			    <select class="form-control">
				  <option>--请选择--</option>
				  <option>2</option>
				  <option>3</option>
				  <option>4</option>
				  <option>5</option>
				</select>
				<button type="button" class="btn btn-success"><img src="/imgs/search.png">查询</button>
				<button type="button" class="btn btn-primary"><img src="/imgs/tianjia.png">添加订单</button>
    		</div>
    		<div class="manage_table">
    			<table class="table table-bordered table-hover text-center">
    				<thead class="bolder">
    					<td>账单编号</td>
    					<td>商品名称</td>
    					<td>商品单位</td>
    					<td>供应商</td>
    					<td>数量</td>
    					<td>账单金额</td>
    					<td>是否付款</td>
    					<td>创建时间</td>
    					<td>操作</td>
    				</thead>
    				<tbody>
    					<tr>
    						<td>账单编号</td>
	    					<td>商品名称</td>
	    					<td>商品单位</td>
	    					<td>供应商</td>
	    					<td>数量</td>
	    					<td>账单金额</td>
	    					<td>是否付款</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    					<tr>
    						<td>账单编号</td>
	    					<td>商品名称</td>
	    					<td>商品单位</td>
	    					<td>供应商</td>
	    					<td>数量</td>
	    					<td>账单金额</td>
	    					<td>是否付款</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    					<tr>
    						<td>账单编号</td>
	    					<td>商品名称</td>
	    					<td>商品单位</td>
	    					<td>供应商</td>
	    					<td>数量</td>
	    					<td>账单金额</td>
	    					<td>是否付款</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    					<tr>
    						<td>账单编号</td>
	    					<td>商品名称</td>
	    					<td>商品单位</td>
	    					<td>供应商</td>
	    					<td>数量</td>
	    					<td>账单金额</td>
	    					<td>是否付款</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    					<tr>
    						<td>账单编号</td>
	    					<td>商品名称</td>
	    					<td>商品单位</td>
	    					<td>供应商</td>
	    					<td>数量</td>
	    					<td>账单金额</td>
	    					<td>是否付款</td>
	    					<td>创建时间</td>
	    					<td>
	    						<a href="javascript:;"><img src="/imgs/read.png"></a>
	    						<a href="javascript:;"><img src="/imgs/updata.png"></a>
	    						<a href="javascript:;"><img src="/imgs/schu.png"></a>
	    					</td>
    					</tr>
    				</tbody>
    			</table>
    		</div>
    		<div class="page_change">	
				<ul class="pagination">
				    <li class="disabled"><a href="#">&laquo</a></li>
				    <li class="active"><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li><a href="#">&raquo;</a></li>
				</ul>
    		</div>
    	</div>
    </div>
`;

$.extend(index.prototype,{
	createDom(){
		$(index.navTemplate).appendTo("article");
	},
	changeLeftActive(){
		//添加高亮提示
		$($("#left_nav").children("a").get(0)).addClass("active");
	}
});

new index();
