function getQuery(){
	var str = (location.search.length>0 ? location.search.substring(1) : ''),
	args = {},
	items = str.length ? str.split("&") : [],
	item = null,
	name = null,
	value = null;
	for (i=0;i<items.length;i++){
		item = items[i].split("=");
		name = decodeURLComponent(item[0]);
		value = decodeURLComponent(item[1]);
		if(name.length) {
			args[name] = value;
		} 
	}
	return args;
}
var vueAjax = new Vue({
	el:"#main",
	data:{

	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(dataObj){
			$.ajax({
				url:"http://blog.com/api/user/doReg",
				type:"get",
				dataType:"json",
				data:dataObj,
				success:function(res){

				}
			})
		}
	}
})