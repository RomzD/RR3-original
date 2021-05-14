//bikeObjects variable from bikesFromObjects.js
var categories = ['rat', 'sport','super'];
var aside = document.querySelector('.bikeList');
//create p element for category & bike name. Push p elements to aside tag
//style for p elements is to do thing
var j=0;
do{
    let elemToPush = document.createElement('div');
    elemToPush.setAttribute('class','cat');
    //elemToPush.setAttribute('class',categories[j] +' cat');
   /* if(j===2){
        elemToPush.setAttribute('class', categories[j] + ' cat lightMenuSuper')
    }*/
    elemToPush.textContent = categories[j];
 //   elemToPush.style.boxSizing='border-box';
    aside.appendChild(elemToPush);
    j++;
}while(j<3)


for (let i =0; i<bikeObjects.bike.length;i++)
{
    
    let elemToPush = document.createElement('div');   
    elemToPush.setAttribute('class',bikeObjects.bike[i].cat);
   if(bikeObjects.bike[i].cat==='wild')
    {
        elemToPush.style.gridColumn ='1/5';
    }
    else{
    elemToPush.style.gridColumn ='2/5';
    }
    elemToPush.textContent= bikeObjects.bike[i].name;
    //elemToPush.style.boxSizing='border-box';
    elemToPush.style.gridRow= i+1 +'/span 1';
    elemToPush.addEventListener('click', loadFullInfo);   
    aside.appendChild(elemToPush);
}
