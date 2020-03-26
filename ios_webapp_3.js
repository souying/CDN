
//本脚本解决点击后跳出safari的问题+页面回放
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
		      //alert('这个js666!');
		  // }	
		}
   document.writeln("<div style=\"display:block;position:fixed;bottom:0;width:100%;height:58px;color:#474747;padding-top:10px;border-top:1px solid #eee;background: linear-gradient(#fffcfc, #e4e4e5);z-index:9999999;\"><div style=\"width:33%;float:left;cursor:pointer;text-align:center;\"onclick=\"window.history.go(-1)\"><img style=\"height:24px;width:24px;\"src=\"https://ae01.alicdn.com/kf/HTB1ilvdN4naK1RjSZFt762C2VXaI.png\"/><div style=\"height:30px;width:100%;line-height:30px;\">后退</div></div><div style=\"width:33%;float:left;cursor:pointer;text-align:center;\"onclick=\"window.location.reload()\"><img style=\"height:24px;width:24px;\"src=\"https://ae01.alicdn.com/kf/HTB1dKncN4jaK1RjSZKz760VwXXa4.png\"/><div style=\"height:30px;width:100%;line-height:30px;\">刷新</div></div><div style=\"width:33%;float:left;cursor:pointer;text-align:center;\"onclick=\"window.history.go(1)\"><img style=\"height:24px;width:24px;\"src=\"https://ae01.alicdn.com/kf/HTB1PFeTN7PoK1RjSZKb7601IXXa9.png\"/><div style=\"height:30px;width:100%;line-height:30px;\">前进</div></div></div>");
   }
	
	 
}());







