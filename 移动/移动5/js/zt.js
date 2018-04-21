// $(function(){
//     var mySwiper = new Swiper('.swiper-container',{
// 		loop: true,
// 	    direction: 'horizontal',
// 	    autoplay: 2000,
// 	    observer:true,
// 	    observeParents:true,
//     })
// })
var vueAjax = new Vue({
	el:"#main",
	data:{
		list : [],
		lists : [],
		banner:[],
		// newBannerList:[],
	},
	mounted:function(){
		this.getData();
		// var mySwiper = new Swiper('.swiper-container',{
		// loop: true,
	 //    // direction: 'horizontal',
	 //    autoplay: 2000,
	 //    //自动初始化swiper
	 //    observer:true,
	 //    observeParents:true,
  //  		})
	},
	methods:{
		getData:function(){
			var that = this;
			$.ajax({
				url:"http://api.zhituteam.com/api/index",
				type:"get",
				dataType:"json",
				data:"",
				success:function(res){
					that.list = res.data.teacher;
					that.lists = res.data.subjects;
					that.banner = res.data.banner;
					var newBannerList = [];
					for(var i=0;i<5;i++){
						newBannerList=newBannerList.concat(res.data.banner);
					}
					that.banner = newBannerList;
					// console.log(that.banner);
					that.swiperBanner();
					// console.log(res);

				}
			});
			console.log(this.list);
		},
		swiperBanner:function(){
			var mySwiper = new Swiper(".swiper-container",{
			loop: true,
		   	observer:true,
		   	pagination: {
			      el: '.swiper-pagination',
			    },
			})
		}
	},
	
	
})