var inputs = document.querySelectorAll('.cat_radio_input');

inputs.forEach(element=>{
    element.addEventListener('change',function(){getSpeedrunData(element.id)});
})

window.onload=function(){
    evt= new Event('change');
    var standard = document.querySelector('#standard');
    standard.dispatchEvent(evt);
}