$(document).ready(function(){
	var oInp = $('#orderInput');
	var expressCode = $('#express_code');
	var token = "eyJhbGciOiJIUzI1NiJ9.eyJjb2RlIjoiMjQxMiIsIm1vYmlsZSI6IjE1ODM4ODk2NTM4In0.xbahGpqROjayGZRXttlnnhERsH4pLt8yUiVyW4y1YZ8";
	var getOrderInfoByOrderNo = "http://api.mingz-tech.com/api/orderInfo/getOrderInfoByOrderNo";
	var queryByCompany = "http://api.mingz-tech.com/api/order/queryByCompany";
	var cnNo = null;
	var intlNo = null;
	var kdCompanyCodeCn = null;
	var kdCompanyCode = null;
	var cnOrderInfo = [];
	var IntlOrderInfo = [];
	var orderInfo = [];

	oInp.val(location.search.split('?order=')[1])

	var showOrderInfo = function(){
		var info = $("#info_ul");
		var lis=$("#info_ul li");
		if(oInp.val()!=""){
			var orderNo = oInp.val();
			expressCode.html(orderNo);
			$.ajax({
				type:'get',
				url:getOrderInfoByOrderNo,
				data:{
					orderNo:orderNo
				},
				async:true,
				beforeSend:function(request){
					request.setRequestHeader("token",token)
				},
				success:function(data){
					if (data.code === 200) {
						var index = lis.length;
				        	for(var i=1;i<index;i++){
				        		lis[i].remove()
				        }
						cnNo = data.obj.cnNo
						intlNo = data.obj.intlNo
						intlkdCompanyCodeCnNo = data.obj.kdCompanyCodeCn
						kdCompanyCode = data.obj.kdCompanyCode
					}else{
						var index = lis.length;
				        	for(var i=1;i<index;i++){
				        		lis[i].remove()
				        }
						var Li = document.createElement("li");
						Li.style.textAlign="center";
						Li.innerHTML="暂无快递信息";
						info.append(Li);
						cnNo = null
						intlNo = null
						intlkdCompanyCodeCnNo = null
						kdCompanyCode = null
					}
				}
			}).then(function(){
				// 获取国内段物流信息
				if (cnNo) {
					$.ajax({
               			type: 'get',
               			url:queryByCompany,
               			data:{
               				num:cnNo,
               				company:kdCompanyCodeCn||'zhongtong'
               			},
               			async:true,
						beforeSend: function(request) {
	                        request.setRequestHeader("token", token);
			            },
			            success:function(data){
			            	if (data.code === 200) {
			            		console.log('dataaa',data.obj.data)
			            		cnOrderInfo = data.obj.data
			            	}
			            }
			        }).then(function(){
			        	// orderInfo = cnOrderInfo.concat(IntlOrderInfo)
			        	// var index = lis.length;
			        	// for(var i=1;i<index;i++){
			        	// 	lis[i].remove()
			        	// }
			        	if (cnOrderInfo.length>0 || false) {
			        		for(var i=0;i<cnOrderInfo.length;i++){
			        			var Li = document.createElement("li");
								var context=cnOrderInfo[i].context.replace("中通快递", "明彰");
								Li.innerHTML=("<span class='title'>"+cnOrderInfo[i].time+"</span><span class='ico'></span><span class='ico1'></span><span class='info'>"+cnOrderInfo[i].context+"</span>");
								info.append(Li)
			        		}
			        	}
			        })
				}else{
					// cnOrderInfo = [];
					// var index = lis.length;
			  //       	for(var i=1;i<index;i++){
			  //       		lis[i].remove()
			  //       }
			  //       var Li = document.createElement("li");
					// Li.style.textAlign="center";
					// Li.innerHTML="暂无国内快递信息";
					// info.append(Li);
				}
				// 获取国际段物流信息
				if (intlNo) {
					$.ajax({
               			type: 'get',
               			url:queryByCompany,
               			data:{
               				num:intlNo,
               				company:kdCompanyCode||''
               			},
               			async:true,
						beforeSend: function(request) {
	                        request.setRequestHeader("token", token);
			            },
			            success:function(data){
			            	console.log('datbbb',data.obj.data)
			            	IntlOrderInfo = data.obj.data
			            	// orderInfo = cnOrderInfo.concat(IntlOrderInfo)
			            	console.log('orderInfo22',orderInfo)
			            }
			        }).then(function(){
			        	// orderInfo = cnOrderInfo.concat(IntlOrderInfo)
			        	// var index = lis.length;
			        	// for(var i=1;i<index;i++){
			        	// 	lis[i].remove()
			        	// }
			        	if (IntlOrderInfo.length>0 || false) {
			        		for(var i=0;i<IntlOrderInfo.length;i++){
			        			var Li = document.createElement("li");
								var context=IntlOrderInfo[i].context.replace("中通快递", "明彰");
								Li.innerHTML=("<span class='title'>"+IntlOrderInfo[i].time+"</span><span class='ico'></span><span class='ico1'></span><span class='info'>"+IntlOrderInfo[i].context+"</span>");
								info.append(Li)
			        		}
			        	}
			        })
				}else{
					// IntlOrderInfo = [];
					// var index = lis.length;
			  //       	for(var i=1;i<index;i++){
			  //       		lis[i].remove()
			  //       }
			  //       var Li = document.createElement("li");
					// Li.style.textAlign="center";
					// Li.innerHTML="暂无国际段快递信息";
					// info.append(Li);
				}
			})
		}else{
			expressCode.html("暂无订单号 ");
		};

	}
	showOrderInfo()
	$('#orderBtn').click(function(){
		var oInp = $('#orderInput');
		showOrderInfo()
		// alert(2)
		// alert(oInp.val())
	})


})