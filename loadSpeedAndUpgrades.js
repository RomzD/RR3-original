function loadSpeedAndUpgrades(initSpeed,topSpeed,nitroSpeed,performance,tires,suspension,armor,topNitroSpeed){
   let divInitSpeed=document.querySelector('.initSpeedValue');
   let divUpgradeSpeed=document.querySelector('.upgradeSpeedValue');
   let divNitroSpeed=document.querySelector('.nitroSpeedValue');
   let divNitroUpgradeSpeed=document.querySelector('.nitroUpdgradeValue');
   let divPerformance=document.querySelector('.performance');
   let divTires=document.querySelector('.tires');
   let divSuspension=document.querySelector('.suspension');
   let divArmor=document.querySelector('.armor');

   divInitSpeed.textContent=initSpeed;
   divUpgradeSpeed.textContent=topSpeed;
   divNitroSpeed.textContent=nitroSpeed;

   divNitroUpgradeSpeed.textContent=topNitroSpeed;
   divPerformance.textContent=performance;   
   divTires.textContent=tires;
   divSuspension.textContent=suspension;
   divArmor.textContent=armor;
  
}