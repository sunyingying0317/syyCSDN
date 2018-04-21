var detailAjax = new Vue({
	el:"#main",
	data:{
		list:[],
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(){
			var that = this;
			$.ajax({
				url:"http://api.zhituteam.com/api/teacher/info/id",
				type:"get",
				dataType:"json",
				data:"",
				success:function(res){
					that.list = res.data.teacher;
				},
			});
			// console.log(getData());
		}
	},
})