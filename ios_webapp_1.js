
//本脚本解决点击后跳出safari的问题
(function(){	

	if ("standalone" in window.navigator && window.navigator.standalone) {
		var scripts=document.getElementsByTagName('script');
		var lastUrl=scripts[scripts.length-1].src;
		var script_valid = false;
		if(lastUrl && lastUrl.indexOf('jsdelivr.net')!=-1) {
		    script_valid = true;
		}
		if(!script_valid){
		  //while(true){
		     // alert('这个js666!');
		  // }	
		}
	
		var d, l = false;
		document.addEventListener("click", function(i) {
			d = i.target;
			while (d.nodeName !== "A" && d.nodeName !== "HTML") d = d.parentNode;
			if ("href" in d && d.href.indexOf("http") !== -1 && (d.href.indexOf(document.location.host) !== -1 || l)) {
				i.preventDefault();
				document.location.href = d.href+'#/';
			}
		}, false)
	}
}());







