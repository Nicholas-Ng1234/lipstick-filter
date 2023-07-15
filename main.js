noseX = 0;
noseY = 0;
function preload() {
    Lipstick = loadImage(
      "https://i.postimg.cc/5y9STPMy/lip-clipart-transparent-background-2.png"
    );
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose",got_poses)
}
function modelLoaded() {
    console.log("pose net is successfully initialised")
}
function got_poses(results) {
    if (results.length>0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw() {
    image(video, 0, 0, 300, 300)
    image(Lipstick, noseX -13, noseY +15, 35, 20)
}
function take_snapshot() {
    save("Lipstick.png")
}