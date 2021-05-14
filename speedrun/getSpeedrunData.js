 function getSpeedrunData(dataType){
    var resultDiv = document.querySelector('.resultContainer');
    var requestURL;
    var radios= document.querySelectorAll('.cat_radio_input');
    radios.forEach(element=>element.disabled=true);

    var request = new XMLHttpRequest();
    requestURL = dataType.slice(0,1)==='s' ? 'https://www.speedrun.com/api/v1/leaderboards/3dxevg1y/category/z277j552?var-j84eve5n=p12ewe41&embed=players': 'https://www.speedrun.com/api/v1/leaderboards/3dxevg1y/category/z277j552?var-j84eve5n=z19g9g8l&embed=players';//z19g9g8l
    request.open('GET', requestURL);
    request.responseType = 'json';    
    request.send();

    request.onload = async function (){
      jsonObj=request.response;
      await   printRequestData(jsonObj);
      radios.forEach(element=>element.disabled=false);
    }

    request.onerror= function(){
        resultDiv.innerHTML='';
        var errorDiv =document.createElement('div');
        errorDiv.className='jsonFetchErr';
        errorDiv.textContent='Data fetch error';
        resultDiv.appendChild(errorDiv);
        radios.forEach(element=>element.disabled=false);
    }

}


async function printRequestData(jsonObj){
    var resultDiv = document.querySelector('.resultContainer');
    resultDiv.innerHTML='';
    
    for(let i =0; i<jsonObj.data.runs.length;i++){       
       var resDiv= document.createElement('div');
       var nameDiv=document.createElement('div');
       var timeDiv= document.createElement('div');
       var namePara =document.createElement('p');
       var paintRes= document.createElement('div');
       paintRes.className='paintResult';

       nameDiv.className='speedrunnerName';
       nameDiv.style.background='linear-gradient(90deg,'+jsonObj.data.players.data[i]['name-style']['color-from'].light+','+jsonObj.data.players.data[i]['name-style']['color-to'].light+')';
       timeDiv.className='speedrunnerTime';
       namePara.className='speedrunnerNameParagraph';

       resDiv.className="resDiv";
       timeDiv.textContent= Math.floor(jsonObj.data.runs[i].run.times.ingame_t/60)+':' + (jsonObj.data.runs[i].run.times.ingame_t%60).toFixed(1)+'s'; 
       namePara.textContent=jsonObj.data.players.data[i].names.international;

       nameDiv.appendChild(namePara);
       resDiv.appendChild(nameDiv);
       resDiv.appendChild(timeDiv);
       resDiv.appendChild(paintRes);
       resultDiv.appendChild(resDiv);       
       await animItems(resDiv);
    }

}

async function animItems(item){
    return item.animate([{paddingLeft: '1em', opacity:0},{paddingLeft: 0,opacity:1}],{duration: 200, fill: 'forwards'}).finished;
}