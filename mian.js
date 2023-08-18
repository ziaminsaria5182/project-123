function setup(){
    video=createCapture(VIDEO);
    video.size(560,500);
    
    canvas=createCanvas(550,550)
    canvas.center()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function draw(){
        background('#000000');
    }
    
    function modelLoaded(){
        console.log('PoseNet Is Initialized!');
    }
    
    function gotPoses(results){
        if(results.length >0)
        {
            console.log(results);
        }
    }