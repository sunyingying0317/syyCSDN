var vue = new Vue({
	el:"#main",
	data:{
		userPhone:"",
		userName:"",
		userPass:"",
		isShowPhone:false,
		isShowName:false,
		isShowPass:false,
		isShow:false,
	},
	mounted:function(){
		// this.getData();
	},
	methods:{
		getData:function(){
			var usPhone = this.userPhone;
			var usName =  this.userName;
			var usPass = this.userPass;
		
		
			if(usPhone==""){
				alert("用户名不能为空");
				return false;
			}
			if (usPass=="") {
				alert("密码不能为空");
				return false;
			};
			// if(userPhone == ""|| userName == ""||userPass==""){
			//  	this.isShow = !this.isShow;
				

			// }
			// else{
			// 	if(res.error_code == 0){
			// 		alert("注册成功");
			// 	}
			// }
			$.ajax({
				url:"http://blog.com/api/user/doReg",
				type:"post",
				dataType:"json",
				data:{
					phone:usPhone,
					uname:usName,
					password:usPass,
				},
				success:function(res){
					if(res.error_code == 0){
						alert("2344");
						location.href = './login.html';
					}else{
						alert("123");
					}
				},
				error:function(er){

				}
			})
		}
	}	
})