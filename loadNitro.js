function loadNitro(nitroCharge,newBike, oldBike){
    var nitroNoteDiv = document.querySelector('.nitroNote');
    var nitroChargeDiv = document.querySelector('.nitroCharge');
   


    if(nitroCharge===0){

        nitroChargeDiv.style.display='none';
        nitroNoteDiv.style.display='none';
    }
    else if(newBike!== oldBike) {
        var scaleDiv= document.querySelector('.scaleDiv');
        var nitroChargeValueDiv = document.querySelector('.nitroChargeValue');      
        let length = (12.5 * nitroCharge).toString() +'px';

        var scalePlayState = scaleDiv.animate(
                        [
                            {width :'1px'},
                            {width : length }
                        ],
                        { duration: 2000,
                        }
                    )


   scalePlayState.onfinish = function(){
    scaleDiv.style.width=length;
    };
        nitroChargeValueDiv.textContent= nitroCharge;
        nitroChargeDiv.style.display ='flex';
        nitroNoteDiv.style.display ='block';
        nitroChargeValueDiv.textContent= nitroCharge;

    }

}