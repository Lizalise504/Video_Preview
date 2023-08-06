console.log("page loaded...");
//function to play and pause the video by hovering over it
var vidClip = document.getElementById("preview");

function mouseover(vidClip){
    vidClip.play();
}

function mouseout(vidClip){
    vidClip.pause();
}

