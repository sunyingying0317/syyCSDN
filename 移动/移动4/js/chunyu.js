
	var a=[1,1,2,3,3,4,3,5]
	var b=[];
	for(var i=0;i<a.length;i++){
		var isRepeat=false;
		for(j=0;j<b.length;j++){
			if(a[i]==b[j]){
				isRepeat=true;
			}
		}
		if(!isRepeat){
			b.push(a[i])
		}
	}