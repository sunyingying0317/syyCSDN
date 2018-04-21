var vueAjax = new Vue({
	el:"#main",
	data:{
		item:"",
		user_id,
		blog_id,
	},
	mounted:function(){
		this.getData();
		// this.getCollect();
	},
	methods:{
		getData:function(){
			// var that = this;	
			$.ajax({
				url:"http://blog.com/api/blog/myBlog",
				type:"post",
				dataType:"json",
				data:"",
				success:function(res){

				},
				error:function(re){

				}
			})
		}
		
	}
})