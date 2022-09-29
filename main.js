function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.postion(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
}

function modelLoaded()
{
    console.log('Database is initialised !');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}