var levels = document.querySelectorAll('.lbl');

function checkTrackSum(e){
    console.log('im in tracksum');
    if( typeof previousCheckedItem === 'object')
    {
        var sum=0;
        var tracksSum = document.querySelectorAll('.checkboxInput').forEach(element=>{ 
            if(element.checked===true){
            sum+= Number(element.value)
        }
        
        });
        console.log(sum);
        if (sum===31){      
        previousCheckedItem.checked=false;
        }
    }
  previousCheckedItem =e.target;
}

levels.forEach(element=>{
    element.addEventListener('click',loadTracks);
})

function setEvents(){
var form = document.querySelector('form');
var form2=document.querySelector('form');
/*var container = document.querySelector('.container');
var levelDiv = document.querySelector('.levelChoose');
levelDiv.addEventListener('change',GenPass(form));
container.addEventListener('change',GenPass(form));*/
var trackCheckBoxes= document.querySelector('.tracks');//selecting parent-> parent element for checkbox inputs

trackCheckBoxes.addEventListener('change',checkTrackSum);

form.addEventListener('click', (e)=>{
    console.log('e.target.className is ' + e.target.className);
  if(e.target.className==='checkboxInput')
    {
        checkTrackSum(e);
    }//force code to recalculate tracks before passing parameters to genform

    genPass(form)
});

//previosCheckedItem from loadtracks.js


var moneyBox= document.getElementById('money');
form.addEventListener('submit',e=>e.preventDefault());
moneyBox.addEventListener('change',()=>genPass(form));
moneyBox.addEventListener('input',()=>genPass(form));
}