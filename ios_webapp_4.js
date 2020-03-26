
//本脚本可以底部添加一个浮动的返回按钮
(function(){	

	if ("standalone" in window.navigator && window.navigator.standalone) {
    
    document.writeln("<div id=\'moveIcon\' style=\'position: fixed;bottom: 10%;left:10%; width: 15%;z-index: 999999\' onclick=\'window.history.go(-1)\' ><img src=\'data:image/png;base64,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\' style=\'width: 100%;\'></div>");

	window.onload = function () {
	    var oDiv = document.getElementById('moveIcon');

	    var disX, moveX, L, T, starX, starY, starXEnd, starYEnd;

	    oDiv.addEventListener('touchstart', function (e) {
	        //e.preventDefault();

	        disX = e.touches[0].clientX - this.offsetLeft;
	        disY = e.touches[0].clientY - this.offsetTop;
	        starX = e.touches[0].clientX;
	        starY = e.touches[0].clientY;
	    });
	    oDiv.addEventListener('touchmove', function (e) {
	        L = e.touches[0].clientX - disX;
	        T = e.touches[0].clientY - disY;
	        starXEnd = e.touches[0].clientX - starX;
	        starYEnd = e.touches[0].clientY - starY;
	        //console.log(L);
	        if (L < 0) {
	            L = 0;
	        } else if (L > document.documentElement.clientWidth - this.offsetWidth) {
	            L = document.documentElement.clientWidth - this.offsetWidth;
	        }

	        if (T < 0) {
	            T = 0;
	        } else if (T > document.documentElement.clientHeight - this.offsetHeight) {
	            T = document.documentElement.clientHeight - this.offsetHeight;
	        }
	        moveX = L + 'px';
	        moveY = T + 'px';
	        //console.log(moveX);
	        this.style.left = moveX;
	        this.style.top = moveY;
	    });
	}



 }

}());







