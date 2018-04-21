var vueAjax = new Vue({
	el:"#main",
	data:{
		list:[],
		userName:"",
		userPass:"",
		isShow:false,
		number: '1',
    	items: {
    		text:'',
  		},
	},
	mounted:function(){
		// this.getData();
	},
	watch:{  //watch()监听某个值（双向绑定）的变化，从而达到change事件监听的效果
 		items:{
   			handler:function(){
     			var _this = this;
        		var _sum = 12; //字体限制为100个
      			_this.$refs.count.setAttribute("maxlength",_sum);
      			_this.number= _sum- _this.$refs.count.value.length;
    		},
     	deep:true
    	}
  	},
	methods:{
		getData:function(){
			var usName = this.userName;
			var usPass = this.userPass;
			// $(".username input[type='text']").each(function(){ alert($(this).val()) });
		
			if(usName==""){
				alert("用户名不能为空");
				return false
				
			};
			if(usPass==""){
				alert("请输入密码");
				return false
			};
			var that = this;
			$.ajax({
				url:"http://blog.com/api/user/doLogin",
				type:"post",
				dataType:"json",
				data:{
					 phone:usName,
					 password:usPass,
				},
				success:function(res){
					that.list = res.data.list;
					if(res.error_code == 0){
						alert("12343");
						location.href = "./homepage.html";
					}else{
					alert(res.message);

					}
				},
				error:function(re){
				}
			})
		}

	}
})