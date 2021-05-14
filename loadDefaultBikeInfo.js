let perroDiv = document.querySelector('.bikeList div:nth-of-type(4)');//perro125
//perroDiv.dispatchEvent('click', loadFullInfo);
let eventDef = new Event('click');
perroDiv.dispatchEvent(eventDef);
//perroDiv.classList.add('lightMenuSuper');
//bikeObjects.currentCat= '' //perro125