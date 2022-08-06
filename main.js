objects = [];
status = "";
user= "";

function preload(){
	video = createVideo('vid.mp4');
}

function setup(){
	canvas= createCapture(480, 380);
	canvas.center();
	video.hide();
}

function draw(){
	image(video, 0, 0, 480, 380);
	   if(status != "")
	   {
		   objectDetector.detect(video, gotResult);
		   for (i = 0; i < objects.length; i++) {
			   document.getElementById("status").innerHTML = "Status : Objects Detected";
			   document.getElementById("number_of_object").innerHTML = "Number of objects detected are : "+ objects.length;

			   fill("#FF0000");
			   percent = floor(objects[i].confidence * 100);
			   text(objects[i].label + "" + percent + "%", objects[i].x + 15, pbjects[i].y + 15);
			   noFill();
			   stroke("FF0000");
			   rect(objects[i].x , objects[i].y, objects[i].width, onjects[i].height);

			   user= document.getElementById("input").innerHTML;
			   if(objects[i].label == user){
				   document.getElementById("status").innerHTML = "Your object has been found"
			   }
		   }
	   }
}

function start(){
	objectDetector = ml5.objectDetector('cocossd', modelLoaded);
	document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
	console.log("modelLoaded");
	status = true;
	video.loop();
	video.speed(1);
	video.volume(0);
}

function gotResult(error, results) {
	if (error) {
		console.log(error);
	}
	cosole.log(results);
	objects= results;
}
