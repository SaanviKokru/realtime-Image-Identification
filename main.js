function setup(){
    console.log("inside_setup")
Canvas=createCanvas(300,300)
Canvas.center();
video=createCapture(VIDEO);
video.hide()
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wL02-9gOk/model.json",modelloaded)
}
 function modelloaded(){

 }
function draw(){
    image(video,0,0,300,300)
    classifier.classify(video,got_results)
}
function got_results(error,results){
    if(error){
        console.error();
    }
else{
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
}


}