function addEvents(){
    var scrollerDivs=document.querySelectorAll('.comparisonOneContainer, .comparisonTwoContainer');
    scrollerDivs.forEach(element => element.addEventListener('wheel', (e)=>{
        e.preventDefault();
        scrollDiv(e)}));

    var scrollButtons = document.querySelectorAll('.buttonScrollTop, .buttonScrollDown');

var fakeWheelEventTop = new WheelEvent('wheel',{deltaY: 100});
var fakeWheelEventBottom = new WheelEvent('wheel', {deltaY : -100});


scrollButtons.forEach(element=> element.addEventListener('click',()=>{ 
   if (element.classList.contains('buttonScrollTop')){
        element.dispatchEvent(fakeWheelEventTop);}
        else
        element.dispatchEvent(fakeWheelEventBottom);
}));


scrollButtons.forEach(element=> element.addEventListener('wheel', (e)=>{
    scrollDiv(e,true);
}))



}
addEvents();