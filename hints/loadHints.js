function loadHints(){
    
    hintsObjects.forEach(element=>{
        var hintsListElem = document.createElement('div');
        var hintsElem = document.createElement('article');
        var hintsElemHeader = document.createElement('h2');
        var hintsElemPara = document.createElement('p');
        var ref = document.createElement('a');
        var refSpan= document.createElement('span');

        hintsListElem.className='hintsListElem';
        hintsElem.className='hintsElem';
        hintsElemHeader.textContent=element.hint;
        hintsElemHeader.className='hintsHeader';
        hintsElemPara.textContent=element.desc;
        hintsListElem.textContent=element.hint;

        ref.href='#'+element.id;
        refSpan.className='refSpan';
        ref.appendChild(refSpan);
        hintsListElem.appendChild(ref);
        hintsElem.setAttribute('id',element.id);

        var aside = document.querySelector('aside');
        var section = document.querySelector('section');
        
        
        hintsElem.appendChild(hintsElemHeader);
        hintsElem.appendChild(hintsElemPara);
        section.appendChild(hintsElem);
        aside.appendChild(hintsListElem);



    })

}

var currAnims;
function addSmoothScroll(){
    var hintsListElems = document.querySelector('aside').childNodes;
    hintsListElems.forEach(element=>{
        element.addEventListener('click',function(e){
            e.preventDefault();
            var ref=e.target.parentNode.getAttribute('href');
            var targetNode = document.getElementById(ref.slice(1));
          //  targetNode.animate([{background:'red'},{background:'transparent'},{background:'rgba(61, 39, 255, 0.274)'}],{duration:2000});
          targetNode.animate([{background:'red'},{background:'transparent'}],{duration:2000});
            var finalCoordinates = targetNode.getBoundingClientRect();
            window.scrollBy({left:0,top:finalCoordinates.y,behavior:"smooth"});
        });
    })
    var toTheTop=document.querySelector('.toTheTop');
    toTheTop.addEventListener('click',(e)=>{
        e.preventDefault();
        var menuCoord= document.querySelector('#header').getBoundingClientRect();
        window.scrollBy({left:0,top:menuCoord.y,behavior:"smooth"});
    })

}