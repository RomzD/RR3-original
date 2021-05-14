async function drawMenu(target, trackName, isForward){//open or close menu node
  //  console.log('trackName is ' + trackName);
    var keyFrames= keyFramesArr.find(keyframe => keyframe[0]===trackName);
 //   console.log('keyframes[1] is'+ keyFrames[1]);
    var elem = document.querySelector('.'+trackName+'DescSmall');
   

    return isForward ? Promise.all( [elem.animate(keyFrames[1],settingsForward).finished,  colorMenuHead(trackName,isForward)]) :
                       Promise.all( [elem.animate(keyFrames[1],settingsBackward).finished, colorMenuHead(trackName,isForward)]);

}

async function colorMenuHead (trackName, isForward){
    var menuHead = document.querySelector('.'+trackName + 'Desc');
//    console.log('menuHead classname is' + menuHead.className);
    var keyFrames =[{filter: 'saturate(0%)'},{filter: 'saturate(100%)'}];
    var settingsForward = {   duration: 200,    fill: "forwards" }
    var settingsBackward= {   duration: 200,    fill: "forwards", direction: 'reverse' }
  
    return isForward ?   menuHead.animate(keyFrames,settingsForward).finished : menuHead.animate(keyFrames,settingsBackward).finished; 
}