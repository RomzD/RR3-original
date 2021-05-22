
function calculateSummary(){//uses activeBikes global object from comparisonObjects.js

    var comparisonWrapper = document.querySelectorAll('.comparisonResult .comparisonWrapper div:not(.spacer) span');//contains spans  with comparison information; divs with needed data start from 2 index div(not 0)
    var comparisonDivs = document.querySelectorAll('.comparisonResult .comparisonWrapper > div:not(.resultHead,.spacer)');// divs, to append styles with styleResult()
    var bike1 = bikeObjects.bike.find(element=>element.bikeNumber===activeBikes[0]);
    var bike2 = bikeObjects.bike.find(element=>element.bikeNumber===activeBikes[1]);
    for(var i=0;i<comparisonWrapper.length;i++)
    { 
        switch (i) {
        case 0:
            comparisonWrapper[i].textContent= bike2.price.slice(1) - bike1.price.slice(1);//set price difference
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
    styleResults(comparisonDivs);
}


function scrollDiv(e,isButton){  
    wheelRotateCount= isButton===true ? 3: wheelRotateCount;
    if(wheelRotateCount<3)
    {
        wheelRotateCount++;
        return;
    }

    wheelRotateCount=0;
    var scrollerDiv=e.target.classList.contains('One')? document.querySelector('.comparisonOneContainer') : document.querySelector('.comparisonTwoContainer') ;

    var currentPosition = scrollerDiv.style.top === '' ? 0 : scrollerDiv.style.top.slice(0, scrollerDiv.style.top.length-1);
   
    currentPosition=Number(currentPosition);
    var customDeltaY = e.deltaY> 0 ? 100: -100; //for firefox, which sets each scroll with 57 px amount
    var whereToScroll= Number(currentPosition) + customDeltaY;

    if (
        !(currentPosition===0 && e.deltaY >0)      &&
        !(currentPosition===-1500 && e.deltaY<0)//no need to change to custo delta
    )
    {
        var activeBike= scrollerDiv.className ==='comparisonTwoContainer' ? 1: 0;
        activeBikes[activeBike]= e.deltaY> 0 ? --activeBikes[activeBike] : ++activeBikes[activeBike];//change active bike;
        activeBikes[activeBike] = activeBikes[activeBike]===0? activeBikes[activeBike]+1 : activeBikes[activeBike]===17? activeBikes[activeBike]-1 : activeBikes[activeBike];//fix array bounds

        calculateSummary();
        scrollerDiv.style.top = whereToScroll+'%';        
    }
}


function changeComparisonBikes(e){
    var choseBike = bikeObjects.bike.find(element=> element.name===e.target.textContent);    
    var comparisonDivs = document.querySelectorAll('.comparisonOneContainer, .comparisonTwoContainer');

    var currBikeNum =choseBike.bikeNumber;
    var compareTo = choseBike.betterBike;
    var currCat = choseBike.cat;
    
    activeBikes[0]=currBikeNum;
    activeBikes[1]=compareTo;
  
     comparisonDivs.forEach(element=> {
     var top= element.classList.contains('comparisonOneContainer') ? ((Number(activeBikes[0])) -1)*-100 : ((Number(activeBikes[1])) -1)*-100;
     element.style.top= top+'%';
    });

    calculateSummary();
    changeCompButtonStyle(currCat);
}

function styleResults(resultWrapper){

    resultWrapper.forEach(element=>{element
        var arrowDiv = element.lastElementChild;
        var calcResult = Number(element.firstElementChild.textContent) > 0 ? '+' : Number(element.firstElementChild.textContent)< 0 ? '-' : '0' ;
        isMoney =  element.classList.contains('compMoney') ? true: false;
      
        if (isMoney){
            arrowDiv.className= calcResult ==='+' ? 'arrowDiv arrowDivUpMoney' : calcResult ==='-' ? 'arrowDiv arrowDivDownMoney' : 'arrowDiv arrowDivEven';
        }
        else {
            arrowDiv.className= calcResult ==='+' ? 'arrowDiv arrowDivUp' : calcResult ==='-' ? 'arrowDiv arrowDivDown' : 'arrowDiv arrowDivEven';
        }

    });
}

function changeCompButtonStyle(currCat){
 //   var pseudoDiv = document.querySelector('.compPseudo');
    var compButtonDiv = document.querySelector('.comparisonButton');
    var prop = currCat==='rat' ?'rgba(253, 23, 23, 0.7)' : currCat=== 'sport' ? 'rgba(10, 255, 10, 0.7)' : currCat==='super' ? 'rgba(255, 56, 205, 0.7)' : 'rgba(9, 4, 248, 0.7)';
    compButtonDiv.style.setProperty('--boxShadow-color', prop);
 //   pseudoDiv.className = 'compPseudo '+currCat + 'Comp';

}