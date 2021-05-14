function loadGameSpec(price,hp,lbs){
   let divHp= document.querySelector('.hp');
   let divLbs= document.querySelector('.lbs');
   let divPrice= document.querySelector('.price');
  
  
       divPrice.textContent=price;
       divHp.textContent=hp;
       divLbs.textContent=lbs;
      

}