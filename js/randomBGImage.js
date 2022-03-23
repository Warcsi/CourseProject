// JavaScript Document

//var imageLocation = document.getElementsById("bgIMG1");
window.onload = randomImage();
function randomImage(){
	var x = getRandomArbitrary();
			
			
	if(x==0){
		document.getElementById('bgIMG1').style.backgroundImage="url(images/background/bg1.png)";
		document.getElementById('bgIMG1').style.height = "300px";
		document.getElementById('bgIMG1').style.backgroundSize= "cover";
	}else if(x==1){
		document.getElementById('bgIMG1').style.backgroundImage="url(images/background/bg2.png)";
		document.getElementById('bgIMG1').style.height = "300px";
		document.getElementById('bgIMG1').style.backgroundSize= "cover";
	}

	
	
}
function getRandomArbitrary() {

	
  return Math.floor(Math.random() * 2); 
}