var previousCheckedItem;

function loadTracks(e){
var p=e.target;
if(p.className==='radio_level_input')
{
    var currentLevel = e.target.id.slice(3);
    createTracks(currentLevel);
    loadTrackAnimations();
}
}


function createTracks(currentLevel){
var divTracks = document.querySelector('.tracks');
var currTracks = trackObjects[currentLevel-1].tracks;
var isChecked=[];
var value=16;
let checkedItems=document.querySelectorAll('.tracks label input');
        if(divTracks.lastChild!==null){
       
            for(let i=0;i<5;i++)
            {
            isChecked.push(checkedItems[i].checked);
            }
       }

        while(divTracks.lastChild!==null)
        {
            divTracks.removeChild(divTracks.lastChild);
        }
    
        for(let i=0;i<currTracks.length;i++)
        {
            var label = document.createElement('label');
            var div= document.createElement('div');
            var input = document.createElement('input');
            var countryName= currTracks[i] === 'br' ? 'brazil' : currTracks[i] === 'it' ? 'italy' : currTracks[i] === 'jp' ? 'japan' : currTracks[i] === 'gr' ? 'germany' :currTracks[i] === 'au' ? 'australia' : currTracks[i] === 'kn' ? 'kenya': 'uk' ;

            label.setAttribute('for',currTracks[i]);
            label.style.cursor='pointer';
            div.setAttribute('class',currTracks[i]);
            input.setAttribute('type','checkbox');
            input.setAttribute('class','checkboxInput');
            input.setAttribute('id',currTracks[i]);
            input.setAttribute('name',"tracks");//changed from input.setAttribute('name',currTracks[i]);
            input.setAttribute('value',value);
            input.checked=isChecked[i]===undefined? false: isChecked[i];
            if(input.checked===true){
                previousCheckedItem=input;
            };
            label.appendChild(input);
            label.appendChild(div);          
            div.textContent=countryName;
            divTracks.appendChild(label);
           value=value/2;
        }
}


