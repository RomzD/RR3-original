
var options = {
 root: null,
 rootMargin: '10px',
 threshold:   0.7
};

var toTheTop = document.querySelector('.toTheTop');
var callback = function(entries, observer){
    entries.forEach(element => {

   if(element.target.id!=='header'){
        if(element.intersectionRatio>=0.7){
        element.target.animate([{},{opacity: 1}],{duration: 500, fill: 'forwards'});
   
        }
        else{
            element.target.animate([{opacity:  element.intersectionRatio},{opacity:element.intersectionRatio/7}],{duration: 500, fill: 'forwards'});
        }
    }//end of branch: display or hide all except header
       
            if(((element.rootBounds.y - window.scrollY)<-500 && toTheTop.style.opacity!=='1') ){
                console.log('im in if');
             
                toTheTop.style.opacity=1;
            }
            
            else if((element.rootBounds.y - window.scrollY)>-500 && toTheTop.style.opacity==='1' )
            {
                console.log('im in else');
                toTheTop.style.opacity='0';
            }//setting up opacity of toTheTop

    });
};

var intersectObserver = new IntersectionObserver(callback,options);
var nodesToObserve = document.querySelectorAll('.hintsElem');
var headerDiv = document.querySelector('#header');
nodesToObserve.forEach(element=>{
intersectObserver.observe(element);
});
intersectObserver.observe(headerDiv);
