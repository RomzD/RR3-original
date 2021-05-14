let lvl1Input =   document.getElementById('lvl1');
let perro125div = document.getElementById('Perro 125');
let myEvent = new Event('click',{"bubbles":true});
lvl1Input.dispatchEvent(myEvent);
perro125div.dispatchEvent(myEvent);
lvl1Input.checked='checked';
genPass(document.querySelector('form'));

setEvents();