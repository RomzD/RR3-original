function loadFullInfo(e){
    let currName = e.target.textContent ;//название мотоцикла
    
    let bike = bikeObjects.bike.find(bike => bike.name === currName);
    loadGameSpec(bike.price,bike.hp,bike.lbs);
    loadSpeedAndUpgrades(bike.initSpeed,bike.topSpeed,bike.nitroSpeed,bike.performance,bike.tires,bike.suspension,bike.armor,bike.topNitroSpeed);
    loadDescription(bike.description);
    loadPicture(bike.pic);
    loadNitro(bike.nitroCharge, e.target, bikeObjects.prevTarget);
    loadStyle(bike.cat);
    loadAnimation(e,bikeObjects.currentCat,bike.cat,bikeObjects.prevTarget);
    
    bikeObjects.currentCat=bike.cat;
    bikeObjects.prevTarget=e.target;
}

