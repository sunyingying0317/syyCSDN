function getQuery(){
			var str = (location.search.length > 0 ? location.search.substring(1) : ''),
			args = {},
			items = str.length ? str.split("&") : [],
			item = null,
			name = null,
			value = null;
			for (i=0; i < items.length; i++){
				item = items[i].split("=");
				name = decodeURIComponent(item[0]);
				value = decodeURIComponent(item[1]);
				if (name.length) {
					args[name] = value;
				}
			}
			return args;
		}
var vue = new Vue({
	el:"#main",
	data:{
		list:{},
		relata:[""],
	
	},
	mounted:function(){
		// this.id = location.search.split("=")[1];
		this.getList();
	},
	methods:{
		
		getList:function(){
			var infoId = getQuery().id;
			var that = this;
			$.ajax({
				// url: 'http://my.blog.com/index.php?c=blog&a=info',
				url: 'http://blog.com/api/blog/info',
				type: 'get',
				dataType: 'json',
				data: {
					id: infoId,
					user_id : window.localStorage.user_id
				},
				success: function(res){
					console.log(res);
					
					// that.infoItem = res.data.blog_info;
					that.list = res.data.blog_info;
					that.relata = res.data.related_blog;
				}
			})
		},
		
		getCollect:function(){
			var that = this;
			// var infoId = this.getQuery().id;
			// var uid = localStorage.getItem("user_id");
			$.ajax({
				url:"http://blog.com/api/collect/add",
				type:"post",
				dataType:"json",
				data:{
					"blog_id":getQuery().id,
					"user_id":localStorage.getItem("user_id"),
				},
				success:function(res){
					if(res.error_code == 0){
						that.$refs.collect.innerHTML = "已收藏";
					}else{
						that.$refs.collect.innerHTML = "收藏";
					}
				},
				error:function(res){
					alert(res.message);
				}
			})
		}
	}
})