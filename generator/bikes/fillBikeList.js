function fillBikeList(){
    var divBikeList = document.querySelector('.bikeList');
    var bikes =bikeObjects.bike;
    for(let i=0; i<bikes.length;i++)
    {
        var label = document.createElement('label');
        var input = document.createElement('input');
        var div= document.createElement('div');
        var divStar = document.createElement('div');


        label.className='bikeName';
        label.setAttribute('for',bikes[i].name);

        input.type='radio';
        input.className='input_radio_bike';
        input.name='bikeName';
        input.id=bikes[i].name;
        input.value=i;

        div.className='bike';
        div.textContent=bikes[i].name;

        divStar.className='bikeStar';
        div.appendChild(divStar);

        label.appendChild(input);
        label.appendChild(div);
        label.addEventListener('click',loadBikeInfo);
        divBikeList.appendChild(label);
    }
}

fillBikeList();