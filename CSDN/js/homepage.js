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
var vueAjax = new Vue({
	el:"#main",
	data:{
		banner:[],
		blog:[],
		// style:""
	},
	mounted:function(){
		this.getData();
		// this.showBtn();
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 2000,//可选选项，自动滑动
			loop: true,
			// pagination : '.swiper-pagination',
			observer:true,//修改swiper自己或子元素时，自动初始化swiper 
			observeParents:false,//修改swiper的父元素时，自动初始化swiper 
		})
	},
	methods:{
		getData:function(obj){
			var that = this;
			$.ajax({
				url:"http://blog.com/api/index/index",
				type:"get",
				dataType:"json",
				data:obj,
				success:function(res){
					that.banner = res.data.banner;
					that.blog = res.data.blog_lists;
				},
				error:function(r){
					
				}
			})
		},
		// showBtn: function(){
		// 	if( window.localStorage.user_id ){
		// 		this.$refs.login.style.display = "none";
		// 		this.$refs.user.style.display = "block";
		// 		this.$refs.publish.style.display = "block";
		// 		// this.$refs.user.innerHTML = window.localStorage.user_name;
		// 	}
		// 	else {
		// 		this.$refs.login.style.display = "block";
		// 		this.$refs.user.style.display = "none";
		// 	}
		// },
	},
})