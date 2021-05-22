function launchOpeningAnimations(isForward){
    
    var checkState = animationsArray[2].state;//longest animation of all 3
        if (checkState==='running'){
            return;
        }

    animationsArray.forEach(element=> {element.state='ready', element.timing=0;});//Refresh animation states in global animationObjects array from comparisonObjects.js     
    animateStep(0, isForward);   
}



async function animateStep(objectIndex, isForward){
    //objectIndex = 1 comparisonButton.width, 2 = comparisonButton.height, 3= comparisonSubstrate;

    if (isForward) {
        if (objectIndex===0){ //animate comparisonSubstrate
        animationsArray[2].elem.style.display='block';
        animationsArray[2].state='running';
        var setState= animationsArray[2].elem.animate(animationsArray[2].keyFrames, animationsArray[2].settingsForward);
        setState.onfinish=(()=>{
            animationsArray[2].state='finished';
        })
        }
        return animationsArray[objectIndex].elem.animate(animationsArray[objectIndex].keyFrames, animationsArray[objectIndex].settingsForward).finished;//return finished promise
    }
    else{       
         
            if (objectIndex===0){
            animationsArray[2].elem.style.display='block';
            animationsArray[2].state='running';
            var setState= animationsArray[2].elem.animate(animationsArray[2].keyFrames, animationsArray[2].settingsBackward);
            setState.onfinish=(()=>{
                animationsArray[2].elem.style.display='none';
                animationsArray[2].state='finished';
            })
            }//end of if
            return animationsArray[objectIndex].elem.animate(animationsArray[objectIndex].keyFrames, animationsArray[objectIndex].settingsBackward).finished;
        }
        
}



animationsArray[1].elem.addEventListener('click', ()=>{launchOpeningAnimations(true)});// add listener for comparisonButton div
animationsArray[2].elem.addEventListener('click', ()=>{launchOpeningAnimations(false)});


async function animInfoDiv(open){
    console.log('im in animInfoDiv, status ' + infoContainer.status + ' , is opened  '+open);
    var keyFrames= [{opacity:0},{opacity:1}];
    var settingsForward={duration: 500, fill: 'forwards'};
    var settingsBackward={duration: 500, fill: 'forwards', direction:'reverse'};

    if(infoContainer.status==='closed' && open){
        infoContainer.status='running';
        infoContainer.elem.style.display='block';
        var finishFlag = infoContainer.elem.animate(keyFrames,settingsForward);
        finishFlag.onfinish = ()=>{
           console.log('im in onfinish');
           infoContainer.status='opened';
       };
    }
    else if (infoContainer.status==='opened' && !open){
        infoContainer.status='running';        
       var finishFlag = infoContainer.elem.animate(keyFrames,settingsBackward);
       finishFlag.onfinish = ()=>{
           infoContainer.elem.style.display='none';
           infoContainer.status='closed';
       };
    }
}



