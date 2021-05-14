function loadTrackAnimations(){
   
    var keyFrames =[
        {opacity: 0},
        {opacity: 1}
    ]
    
    var settings={duration: 500, fill: 'forwards'};

    var objectsToAnim = document.querySelectorAll('.tracks label');
    
    
    var p = async function(){return objectsToAnim[0].animate(keyFrames,settings).finished}
     p().then(()=>{ return objectsToAnim[1].animate(keyFrames,settings).finished})
     .then(()=>{ return objectsToAnim[2].animate(keyFrames,settings).finished})
     .then(()=>{ return objectsToAnim[3].animate(keyFrames,settings).finished})
     .then(()=>{ return objectsToAnim[4].animate(keyFrames,settings).finished})

    }
