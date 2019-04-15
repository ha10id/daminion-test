var bigCircle = document.getElementById('big'),
	smallCircle = document.getElementById('small'),
	maniacChecker = document.getElementById('maniacCheck'),
	stalker = function () {
		var centerBigY = bigCircle.offsetTop + bigCircle.clientHeight/2,//Y coord of center big circle
			centerBigX = bigCircle.offsetLeft + bigCircle.clientWidth/2,//X coord of center big circle
			centerSmallY = smallCircle.offsetTop + smallCircle.clientHeight/2,//Y coord of center big circle
			centerSmallX = smallCircle.offsetLeft + smallCircle.clientWidth/2,//X coord of center big circle
			smallX = smallCircle.offsetLeft,
			smallY = smallCircle.offsetTop,
			radiusSmall = smallCircle.clientWidth/2,
			radiusBig = bigCircle.clientWidth/2,
			mouseX = event.pageX,
			mouseY = event.pageY,
			distanceB2M = Math.sqrt(Math.pow((centerBigX - mouseX),2) + Math.pow((centerBigY - mouseY),2)),//distance from big circle to mouse
			distanceS2M = Math.sqrt(Math.pow((centerSmallX - mouseX),2) + Math.pow((centerSmallY - mouseY),2)),//distance from small circle to mouse
			distanceMaxS2B = radiusBig - radiusSmall, // distance, where circle can run
			distanceS2B, // small to big distance
			newCenterSmallX, // 4 maniac
			newCenterSmallY, // 4 maniac
			escapeAngle; // random angle 4 escape
		
		//if normal mode
		if (!maniacChecker.checked){
			//if mouse in big circle and small can painting
			if (distanceMaxS2B > distanceB2M){
				//replace small circle
				smallCircle.style.cssText = "\
					left: " + (mouseX - radiusSmall) + "px;\
					top: " + (mouseY - radiusSmall) + "px;\
					visibility: visible";
			}
		} else {//maniac mode
			var outLoop = 0;			
			
			//cycle 4 finding right way to escape, every loop counting escape away to 1(cool trick)
			for (var i = 1; i > outLoop; i++){
				
				escapeAngle = Math.random()*Math.PI*2;
				newCenterSmallX = centerSmallX + i * Math.sin(escapeAngle);//school geometry, bitch
				newCenterSmallY = centerSmallY + i * Math.cos(escapeAngle);
				distanceS2B = Math.sqrt(Math.pow((newCenterSmallX - centerBigX),2) + Math.pow((newCenterSmallY - centerBigY),2));
				distanceS2M = Math.sqrt(Math.pow((newCenterSmallX - mouseX),2) + Math.pow((newCenterSmallY - mouseY),2));
				
				//if circle escaped from mouse
				if ((distanceS2B < distanceMaxS2B) && (distanceS2M > radiusSmall))
					outLoop = i + 2;
			}
			
			smallCircle.style.cssText = "\
				left: " + (newCenterSmallX - radiusSmall) + "px;\
				top: " + (newCenterSmallY - radiusSmall) + "px;\
				visibility: visible";
			
		}
		
	},
	panicStyle = function () {//function change styles to Panic Mode
		if (maniacChecker.checked){
			bigCircle.className = 'bigPanic';
			smallCircle.className = 'smallPanic';
			
			//if user click "check to Maniac Mode without entering to bigCircle
			smallCircle.style.cssText = "\
				left: " + (event.pageX + 250) + "px;\
				top: " + (event.pageY - 250) + "px;\
				visibility: visible";
			
		} else {
			bigCircle.className = '';
			smallCircle.className = '';
		}
	};

bigCircle.onmousemove = function () {
	stalker();
}

maniacChecker.onchange = function () {
	panicStyle();
};

