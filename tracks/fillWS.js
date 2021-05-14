function fillWS(e,isForward){
var wsPara = document.querySelector('.trackDesc');
var wsHeader = document.querySelector('.trackHeader')
var currClass = e.target.className.slice(0,2);
var longevityDiv =  document.querySelectorAll('.trackDescContainer p');
var longevityDescDiv = document.querySelector('.trackDescContainer');
console.log(currClass);
var currTrack = trackObjects.find( track => track.cat ===currClass );

wsHeader.textContent=currTrack.name;
wsPara.textContent=currTrack.desc;
var indexer=0;
longevityDiv.forEach(element=> {
    element.textContent='LEVEL  ' + (indexer+1) +' : ' + currTrack.longevity[indexer] + (currTrack.longevity[indexer]==='none'?  '' : ' miles');
    indexer++;
});

var keyFramesDistance =[
    {color: 'transparent',   textShadow:'1px 1px transparent'},
    {color: 'white',   textShadow:'1px 1px gray'}
]

var KeyFramesHeader =[
    {color: 'transparent',   textShadow:'2px 2px transparent'},
    {color: 'white',   textShadow:'0.1em 0.1em black'}
]

var KeyFramesText =[
    {color: 'transparent',   textShadow:'1px 1px transparent'},
    {color: 'white',   textShadow:'1px 1px black'}
]
return isForward? Promise.all([wsHeader.animate(KeyFramesHeader,settingsForward).finished, wsPara.animate(KeyFramesText,settingsForward).finished, longevityDescDiv.animate(keyFramesDistance,settingsForward).finished]) : 
                  Promise.all([wsHeader.animate(KeyFramesHeader,settingsBackward).finished, wsPara.animate(KeyFramesText,settingsBackward).finished, longevityDescDiv.animate(keyFramesDistance,settingsBackward).finished]);

}

