window.onload=function(){
	var oBtn=document.getElementById("btn");
	var orderBtn=document.getElementById("orderBtn");
	var oInp=document.getElementById("input");
	var expressCode=document.getElementById("express_code");
	var orderInput=document.getElementById("orderInput");
	var main = document.getElementsByClassName("main_box")[0];
	var order = document.getElementsByClassName("order_box")[0];
	var token = "eyJhbGciOiJIUzI1NiJ9.eyJjb2RlIjoiMjQxMiIsIm1vYmlsZSI6IjE1ODM4ODk2NTM4In0.xbahGpqROjayGZRXttlnnhERsH4pLt8yUiVyW4y1YZ8";
	var showOrderInfo=function(){
		if(orderInput.value!=""){
			expressCode.innerHTML=orderInput.value;
		}else{
			expressCode.innerHTML="暂无订单号 ";
		};
		var info=document.getElementById("info_ul");
		var lis=info.getElementsByTagName("li");
		$.ajax({
			type:"get",
			url:"http://api.didalive.net/api/orderInfo/getOrderInfoByOrderNo",
			data:{
				orderNo:oInp.value
			},
			async:true,
			beforeSend: function(request) {
                        request.setRequestHeader("token", token);
            },
            success: function(data) {
               	if(data.code=="200"){
               		obj = data.obj;
               		cnNo= obj.cnNo;
               		intlNo = obj.intlNo;
               		kdCompanyCode = obj.kdCompanyCode;
               		kdCompanyCodeCn = obj.kdCompanyCodeCn;
               		$.ajax({
               			type: 'get',
               			url:"http://api.didalive.net/api/order/queryByCompany",
               			data:{
               				num:cnNo,
               				company:'zhongtong'
               			},
               			async:true,
						beforeSend: function(request) {
	                        request.setRequestHeader("token", token);
			            },
               			success:function(data){
							var index=lis.length;
							for (var i=1;i<index;i++) {
								info.removeChild(lis[1]);
							};
							var data = data.obj.data;
							if (data.length>0) {
								for (var i=0;i<data.length;i++) {
									var Li = document.createElement("li");
									var context=data[i].context.replace("中通快递", "明彰");
									Li.innerHTML="<span class='title'>"+data[i].time+"</span><span class='ico'></span><span class='ico1'></span><span class='info'>"+context+"</span>";
									info.appendChild(Li);
								}
							}else{
								var Li = document.createElement("li");
								Li.style.textAlign="center";
								Li.innerHTML="暂无快递信息";
								info.appendChild(Li);
							}
               			}
               		})
               	}
            }
		});
	};
	
	orderBtn.onclick=function(){
		oInp.value=orderInput.value;
		showOrderInfo()
	}
	oBtn.onclick=function(){
		main.className="main_box hide";
		order.className="order_box show";
		orderInput.value=oInp.value;
		showOrderInfo()
	}
}
