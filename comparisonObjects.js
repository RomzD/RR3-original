function animationObject(name, className ,keyFrames, settingsForward, settingsBackward, timing, state)
{
    this.name = name;
    this.elem = document.querySelector(className);
    this.keyFrames=keyFrames;
    this.settingsForward=settingsForward;
    this.settingsBackward=settingsBackward;
    this.timing=timing;
    this.state=state;
}

var keyFramesArray=[
    [ "comparisonContaierRollOut",  '.comparisonContaier' , [{left: '101%'},{left: '0'}], {duration: 1000, fill:'forwards' , easing: ' ease-in-out'}, {duration: 1000, fill:'forwards', direction: 'reverse', easing: ' ease-in-out'}, 0, state="ready" ],
    [ "comparisonRollIn", '.comparisonButton' , [{height: '50%'},{height: '100%'}], {duration: 1000, fill:'forwards', easing: ' ease-in-out'}, {duration: 1000, fill:'forwards', direction: 'reverse', easing: ' ease-in-out'}, 0, state="ready" ],
    [ "comparisonSubstrate",  '.comparisonSubstrate', [{opacity: 0},{opacity: 1}], {duration: 2000, fill:'forwards'}, {duration: 2000, fill:'forwards', direction: 'reverse'}, 0, state="ready" ]
]
var animationsArray=[];
keyFramesArray.forEach(element=>
    {
        animationsArray.push(new animationObject(element[0],element[1],element[2],element[3],element[4],element[5],element[6]));
    }
    );
//end of animation objects definition
var activeBikes =[1,1];//global activeBikes object for bike comparison. 1 - first comparison column, 2 - second comparison column;
var wheelRotateCount =0;//global wheet rotate counter. used in wheel & click events on comparisonFunctionality.js

function loadComparisons(){
var containers = [];
containers.push(document.querySelector('.comparisonOneContainer'));
containers.push(document.querySelector('.comparisonTwoContainer'));

containers.forEach(element=> loadComparison(element, containers.indexOf(element)+1));

}
loadComparisons();//to redefine in other file

function loadComparison(container,index){
    for(let i=0;i<bikeObjects.bike.length; i++){
    var colIndClass = index===1 ? ' One' :' Two'
    var bike = bikeObjects.bike;

    var comparisonInnerContainer = document.createElement('div');
    var marginDiv = document.createElement('div');
    var comparisonWrapper = document.createElement('div')
    var compBikeImage = document.createElement('div');
    var compBikeName = document.createElement('div');
    var compPrice = document.createElement('div');
    var compInitSpeed = document.createElement('div');
    var compUpgradedSpeed = document.createElement('div');
    var compInitNitroSpeed = document.createElement('div');
    var compUpgradedNitroSpeed = document.createElement('div');
    var compNitroCharge = document.createElement('div');
    var compPerformance = document.createElement('div');
    var compTires = document.createElement('div');
    var compSuspension = document.createElement('div');
    var compArmor = document.createElement('div');

    comparisonInnerContainer.className='comparisonInnerContainer' + colIndClass;
    marginDiv.className='marginDiv'  + colIndClass;
    comparisonWrapper.className='comparisonWrapper' + colIndClass;
    compBikeImage.className='compBikeImage' + colIndClass;
    compBikeName.className='compBikeName' + colIndClass;
    compPrice.className='compPrice' + colIndClass;
    compInitSpeed.className='compInitSpeed' + colIndClass;
    compUpgradedSpeed.className='compUpgradedSpeed ' + colIndClass;
    compInitNitroSpeed.className='compInitNitroSpeed ' + colIndClass;
    compUpgradedNitroSpeed.className='compUpgradedNitroSpeed' + colIndClass;
    compNitroCharge.className='compNitroCharge compNitro' + colIndClass;
    compPerformance.className='compPerformance' + colIndClass;
    compTires.className='compTires' + colIndClass;
    compSuspension.className='compSuspension' + colIndClass;
    compArmor.className='compArmor' + colIndClass;

    compBikeImage.style.background= 'url(\''+bike[i].pic+'\')';
    compBikeName.textContent=bike[i].name;
    compPrice.textContent=bike[i].price;
    compInitSpeed.textContent=bike[i].initSpeed;
    compUpgradedSpeed.textContent=bike[i].topSpeed;
    compInitNitroSpeed.textContent=bike[i].nitroSpeed;
    compUpgradedNitroSpeed.textContent=bike[i].topNitroSpeed;
    compNitroCharge.textContent=bike[i].nitroCharge;
    compPerformance.textContent=bike[i].performance;
    compTires.textContent=bike[i].tires;
    compSuspension.textContent=bike[i].suspension;
    compArmor.textContent=bike[i].armor;


    comparisonInnerContainer.appendChild(marginDiv);
    comparisonWrapper.appendChild(compBikeImage);
    comparisonWrapper.appendChild(compBikeName);
    comparisonWrapper.appendChild(compPrice);
    comparisonWrapper.appendChild(compInitSpeed);
    comparisonWrapper.appendChild(compUpgradedSpeed);
    comparisonWrapper.appendChild(compInitNitroSpeed);
    comparisonWrapper.appendChild(compUpgradedNitroSpeed);
    comparisonWrapper.appendChild(compNitroCharge);
    comparisonWrapper.appendChild(compPerformance);
    comparisonWrapper.appendChild(compTires);
    comparisonWrapper.appendChild(compSuspension)
    comparisonWrapper.appendChild(compArmor);
    comparisonInnerContainer.appendChild(comparisonWrapper);
    container.appendChild(comparisonInnerContainer);
    }
}
///end of comparison slider objects

var infoContainer ={
    elem  : document.querySelector('.infoContainer'),
    status  : 'closed'
}
