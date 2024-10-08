document.addEventListener("DOMContentLoaded", function(){

    const totalFrames = 65; 
    let currentFrame = 0;  
    const framesPerScroll = 5; //the speed, - at which the sprites will change

    const sprite = document.getElementById('sprite');

    // Load all the Rendered-Images 
    const frames = [];
    for (i = 0; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `animation/animationZoomingToIcosphere${i}.png`;
        frames.push(img);
    }

    // Handle scroll event
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            // Scrolling down
            currentFrame = Math.min(currentFrame + framesPerScroll, totalFrames);
        } else {
            // Scrolling up
            currentFrame = Math.max(currentFrame - framesPerScroll, 0);
        }
        sprite.src = `animation/animationZoomingToIcosphere${currentFrame}.png`;
    });

    

})