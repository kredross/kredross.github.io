$(document).ready(function () {
manifest = [

    "/1.png",
    "2.png"
     //etc...

];

// Create a preloader. There is no manifest added to it up-front, we will add items on-demand.
preload = new createjs.LoadQueue(true, ""); //change "" to add base path

//show progress
var $mainProgress = $("#mainProgress"),
    $progressBar = $mainProgress.find('.progress');
$progressBar.width(0);
preload.addEventListener("progress", function()
{
       console.log('Updating preloading progress...'+Math.round(preload.progress*100)+"%");
       $progressBar.width(preload.progress * $mainProgress.width());
});

//complete callback
preload.addEventListener("complete", function()
{
    console.log('ASSETS PRELOADED...');
});

preload.setMaxConnections(5);
preload.loadManifest(manifest);
})