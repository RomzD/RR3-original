function launchOpeningAnimations(){
    animationsArray.forEach(element=> {element.state='ready', element.timing=0;});//Refresh animation states in global animationObjects array from comparisonObjects.js     

    animateStep(0, true)    

}



async function animateStep(objectIndex, isForward){
    //objectIndex = 1 comparisonButton.width, 2 = comparisonButton.height, 3= comparisonSubstrate;

    if (isForward) {
        if (objectIndex===0){ //animate comparisonSubstrate
        animationsArray[2].elem.style.display='block';
        animationsArray[2].state='running';
        animationsArray[2].elem.animate(animationsArray[2].keyFrames, animationsArray[2].settingsForward);
        }
        return animationsArray[objectIndex].elem.animate(animationsArray[objectIndex].keyFrames, animationsArray[objectIndex].settingsForward).finished;//return finished promise
    }
}


animationsArray[1].elem.addEventListener('click', ()=>{launchOpeningAnimations()})// add listener for comparisonButton div





