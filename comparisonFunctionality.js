
function calculateSummary(){//uses activeBikes global object from comparisonObjects.js

    var comparisonWrapper = document.querySelectorAll('.comparisonResult .comparisonWrapper div:nth-child(n+2)');//contains divs with comparison information; divs with needed data start from 2 index div(not 0)
    var bike1 = bikeObjects.bike.find(element=>element.bikeNumber===activeBikes[0]);
    var bike2 = bikeObjects.bike.find(element=>element.bikeNumber===activeBikes[1]);
  //  console.log('im in calculateSummary')
    for(var i=0;i<comparisonWrapper.length;i++)
    { //console.log('im in calculateSummary loop, compWrapper.')
        switch (i) {
        case 0:
            comparisonWrapper[i].textContent= bike2.price.slice(1) - bike1.price.slice(1);//set price difference
            console.log(bike2.price.slice(1) + ' '+  bike1.price.slice(1));
            break;
        case 1:
            comparisonWrapper[i].textContent=bike2.initSpeed.slice(4) - bike1.initSpeed.slice(4);//non-upgraded speed
            break;
        case 2:
            comparisonWrapper[i].textContent=bike2.topSpeed.slice(4) - bike1.topSpeed.slice(4);//upgraded speed
            break;
        case 3:
            comparisonWrapper[i].textContent= (bike2.nitroSpeed==='none')|| (bike1.nitroSpeed==='none')? '-': bike2.nitroSpeed.slice(4) - bike1.nitroSpeed.slice(4);
            break;
        case 4:
            comparisonWrapper[i].textContent= (bike2.topNitroSpeed==='none')|| (bike1.topNitroSpeed==='none')? '-': bike2.topNitroSpeed.slice(4) - bike1.topNitroSpeed.slice(4);
            break;
        case 5:
            comparisonWrapper[i].textContent= bike2.nitroCharge - bike1.nitroCharge;
            break;
        case 6:
             comparisonWrapper[i].textContent= bike2.performance.slice(1) - bike1.performance.slice(1);
            break;
        case 7:
            comparisonWrapper[i].textContent= bike2.tires.slice(1) - bike1.tires.slice(1);
            break;
        case 8:
            comparisonWrapper[i].textContent= bike2.suspension.slice(1) - bike1.suspension.slice(1);
            break;
        case 9:
            comparisonWrapper[i].textContent= bike2.armor.slice(1) - bike1.armor.slice(1);
            break;        
        }
    }   
}
calculateSummary(); //redefine in other file later
//end of calculate summary

function scrollDiv(e){  
    console.log('im in wheel');
    if(wheelRotateCount<3)
    {
        wheelRotateCount++;
        return;
    }

    console.log('im after if');
    wheelRotateCount=0;
   // var scrollersParentNode= document.querySelector('.'+e.target.parentNode.parentNode.parentNode.className);//container comparisonOneContainer or comparisonTwoContainer
   // var scrollersInnerContainer =document.querySelector('.'+e.target.parentNode.parentNode.className); 
  //  var scrollerDiv = document.querySelector('.'+scrollersParentNode.className + ' .'+ scrollersInnerContainer.className);//select innerContainer from proper parent
 // console.log('scrollerDiv is '+scrollerDiv.className +' , parent is' + scrollersParentNode.className + ' , scrollerInnerContainer ' + scrollersInnerContainer.className);
    var scrollerDiv=document.querySelector('.'+e.target.parentNode.parentNode.parentNode.className);
    var currentPosition = scrollerDiv.style.top === '' ? 0 : scrollerDiv.style.top.slice(0, scrollerDiv.style.top.length-1);
   
    currentPosition=Number(currentPosition);
    var whereToScroll= Number(currentPosition) + e.deltaY;
    console.log('outer currentPosition is '+currentPosition + ' , outer whereToScroll is ' + whereToScroll + ' , e.deltaY is ' +e.deltaY);
    if (
        !(currentPosition===0 && e.deltaY >0)      &&
        !(currentPosition===-1500 && e.deltaY<0)
    )
    {
        var activeBike= scrollerDiv.className ==='comparisonTwoContainer' ? 1: 0;
        activeBikes[activeBike]= e.deltaY> 0 ? --activeBikes[activeBike] : ++activeBikes[activeBike];//change active bike;
        activeBikes[activeBike] = activeBikes[activeBike]===0? activeBikes[activeBike]+1 : activeBikes[activeBike]===17? activeBikes[activeBike]-1 : activeBikes[activeBike];//fix array bounds
     
       // whereToScroll= e.deltaY>0 ?  whereToScroll+100 : whereToScroll-100;
        
        console.log('inner whereToScroll is ' + whereToScroll + ' , e.deltaY is ' + e.deltaY + ' , activeBike is ' + activeBike + ' , activeBikes[activeBike] is '+ activeBikes[activeBike]);
        scrollerDiv.style.top = whereToScroll+'%';
        calculateSummary();
    }

}
