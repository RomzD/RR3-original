function addEvents(){
    var scrollerDivs=document.querySelectorAll('.comparisonOneContainer, .comparisonTwoContainer');
    scrollerDivs.forEach(element => element.addEventListener('wheel', (e)=>{scrollDiv(e)}));
}
addEvents();