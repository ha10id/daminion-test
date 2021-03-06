import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  bigCircle: HTMLElement
  smallCircle: HTMLElement
  maniacChecker: HTMLInputElement
  
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
  this.bigCircle = document.getElementById('big')
	this.smallCircle = document.getElementById('small')
	this.maniacChecker = document.getElementById('maniacCheck') as HTMLInputElement
  this.bigCircle.addEventListener( 'mousemove', this.stalker.bind(this))
  //window.document.addEventListener('mousemove', this.mouseMove.bind(this));
  console.log(this) 
  }
  stalker(event) {
    // console.log(event)
		var centerBigY = this.bigCircle.offsetTop + this.bigCircle.clientHeight/2,//Y coord of center big circle
			centerBigX = this.bigCircle.offsetLeft + this.bigCircle.clientWidth/2,//X coord of center big circle
			centerSmallY = this.smallCircle.offsetTop + this.smallCircle.clientHeight/2,//Y coord of center big circle
			centerSmallX = this.smallCircle.offsetLeft + this.smallCircle.clientWidth/2,//X coord of center big circle
			smallX = this.smallCircle.offsetLeft,
			smallY = this.smallCircle.offsetTop,
			radiusSmall = this.smallCircle.clientWidth/2,
			radiusBig = this.bigCircle.clientWidth/2,
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
		if (!this.maniacChecker.checked){
			//if mouse in big circle and small can painting
			if (distanceMaxS2B > distanceB2M){
				//replace small circle
				this.smallCircle.style.cssText = "\
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
			
			this.smallCircle.style.cssText = "\
				left: " + (newCenterSmallX - radiusSmall) + "px;\
				top: " + (newCenterSmallY - radiusSmall) + "px;\
				visibility: visible";
			
		}
		
	}
	panicStyle(event) {//function change styles to Panic Mode
		if (this.maniacChecker.checked){
			this.bigCircle.className = 'bigPanic';
			this.smallCircle.className = 'smallPanic';
			
			//if user click "check to Maniac Mode without entering to bigCircle
			this.smallCircle.style.cssText = "\
				left: " + (event.pageX + 250) + "px;\
				top: " + (event.pageY - 250) + "px;\
				visibility: visible";
			
		} else {
			this.bigCircle.className = '';
			this.smallCircle.className = '';
		}
  }
}

