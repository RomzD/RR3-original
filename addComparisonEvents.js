function addEvents(){
    var scrollerDivs=document.querySelectorAll('.comparisonOneContainer, .comparisonTwoContainer');    
    var scrollButtons = document.querySelectorAll('.buttonScrollTop, .buttonScrollDown');
    var fakeWheelEventTop = new WheelEvent('wheel',{deltaY: 100});
    var fakeWheelEventBottom = new WheelEvent('wheel', {deltaY : -100});
    var asideNodes = document.querySelectorAll('aside div:nth-child(n+4)');
    var perroDiv = document.querySelector('.bikeList div:nth-of-type(4)');//perro125
    var eventDef = new Event('click');
    var infoButton = document.querySelector('.infoButton');
    var closeInfoButton = document.querySelector('.closeInfoContainer');

 scrollerDivs.forEach(element => element.addEventListener('wheel', (e)=>{
        e.preventDefault();
        scrollDiv(e)}));

scrollButtons.forEach(element=> element.addEventListener('click',()=>{ 
   if (element.classList.contains('buttonScrollTop')){
        element.dispatchEvent(fakeWheelEventTop);}
        else
        element.dispatchEvent(fakeWheelEventBottom);
}));

scrollButtons.forEach(element=> element.addEventListener('wheel', (e)=>{
    scrollDiv(e,true);
}))

asideNodes.forEach(element=> element.addEventListener('click',(e)=>{changeComparisonBikes(e)}));

infoButton.addEventListener('click',()=>{
    console.log('im in set event');
    animInfoDiv(true);
});

closeInfoButton.addEventListener('click',()=>{
    console.log('im in set event');
    animInfoDiv(false);
});

perroDiv.dispatchEvent(eventDef);//load Default bike & calculate comparison
}

addEvents();