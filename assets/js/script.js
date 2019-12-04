
let night = false;
let button = document.getElementById("button");
button.onclick = function() {
	if(night==false){
		lampImg.src = "assets/images/lamp-on.svg"
		windowImg.src = "assets/images/night.svg"
		night = true;
	}
	else{
		lampImg.src = "assets/images/lamp-off.svg"
		windowImg.src = "assets/images/day.svg"
		night = false;
	}
}


