
nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550 ,500);

    canvas=createCanvas(550,450);
    canvas.position(580,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("posenet is initiaized");
}
function draw()
{
    background('#add8e6');
    fill('#b19cd9');
    stroke('#00008b');
   

}
function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("x="+nosex+"y="+nosey);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=leftwristx-rightwristx;
    }

}

