var prevBike={
    bike: '',
    animation:''
}

function loadBikeInfo(e){

    if(e.target.className==='input_radio_bike'){
        if(prevBike.bike !=='')
        {
         
            prevBike.classList.remove(prevBike.animation);
        
        }
       
        var currBike = bikeObjects.bike.find(bike=>bike.name===e.target.id);
        var currCat = currBike.cat;     
        currCat=currCat[0].toUpperCase()+currCat.slice(1);

       prevBike=e.target.parentElement.querySelector('.bikeStar');
       prevBike.classList.add('animate'+currCat);
       prevBike.animation='animate'+currCat;


       var spanInit = document.createElement('span');
       var spanUpg = document.createElement('span');
       var spanInitNitro= document.createElement('span');
       var spanUpgNitro= document.createElement('span');

        spanUpg.className='spanOpa';
        spanUpgNitro.className='spanOpa';
        spanInit.className='spanOpa';
        spanInitNitro.className='spanOpa';

        var divInitSpeed=document.querySelector('.bikeInitSpeedValue');
        divInitSpeed.innerHTML='';

        var divUpgradedSpeed=document.querySelector('.bikeUpgradedSpeedValue');     
        divUpgradedSpeed.innerHTML='';  

        var divNitroSpeed = document.querySelector('.bikeInitNitroSpeedValue');      
        divNitroSpeed.innerHTML='';

        var divUpgradedNitroSpeed = document.querySelector('.bikeUpgradedNitroSpeedValue');     
        divUpgradedNitroSpeed.innerHTML='';

        var divBikePicture = document.querySelector('.displayBike');
        divBikePicture.innerHTML='';
       
       // divInitSpeed.textContent=currBike.initSpeed;
       spanInit.textContent=currBike.initSpeed;
       divInitSpeed.appendChild(spanInit);

       // divUpgradedSpeed.textContent=currBike.topSpeed;
       spanUpg.textContent=currBike.topSpeed;
       divUpgradedSpeed.appendChild(spanUpg);

      //  divNitroSpeed.textContent=currBike.nitroSpeed;
      spanInitNitro.textContent=currBike.nitroSpeed;
      divNitroSpeed.appendChild(spanInitNitro);

      //  divUpgradedNitroSpeed.textContent=currBike.topNitroSpeed;
      spanUpgNitro.textContent=currBike.topNitroSpeed;
      divUpgradedNitroSpeed.appendChild(spanUpgNitro);
      
        divBikePicture.style.background = 'url("../'+currBike.pic +'")';
        var keyFrames =[
            {opacity: 0},
            {opacity: 1}
        ]
        
       


        var settings={duration: 200,fill: 'forwards'};
        var anim=async function Anim(){
            return divBikePicture.animate(keyFrames,settings).finished
        };
        anim().then(()=>{
          return  spanInit.animate(keyFrames,settings).finished, spanUpg.animate(keyFrames,settings).finished
        }).then(()=>{
            return   spanInitNitro.animate(keyFrames,settings).finished, spanUpgNitro.animate(keyFrames,settings).finished
        })
       
        


    }
}


