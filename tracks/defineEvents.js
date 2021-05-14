var eventObjects = document.querySelectorAll("div[class~='evt']");

eventObjects.forEach(elem =>  elem.addEventListener('click', function(e){     

    var p = document.getAnimations();
    var animationIndicator= 0;
    for(let i =0;i< p.length;i++){
        console.log(p[i].playState);
        if (p[i].playState!=='finished')
        {
        animationIndicator=1;
        break;
        }
    };

    console.log('animationIndicator is'+ animationIndicator);
    if ( animationIndicator !==0) return;
    else  launchAnimation(e);    
       
} 
                    ) 
  )
                         
var br=document.querySelector('.brDesc');
var evt = new Event('click');
br.dispatchEvent(evt);
              