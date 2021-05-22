var bikes = [
    ['rat','Perro 125','$2990','35','200','120/121','126/127','none','none','$740','$1000','$140','$290','Ultra-quick two-stroke with all the power of a leaf blower.',0,1,2],
    ['rat','Corsair 400','$3240','45','310','122/123','128/129','none','none','$810','$1000','$160','$320','One of the few birds that can\'t fly. Should be called PENGUIN.',0,2,3],
    ['rat','Kamakazi 250', '$3490','50','290','124/125','130/131','none','none','$870','$1000','$170','$340','This tiny two-stroker has smoked bigger bikes in it\'s time. ',0,3,4],
    ['rat','Banzai 450','$4990','60','340','130/131','137/138','none','none','$1240','$1000','$240','$490','Roars out of corners faster than some bikes twice it\'s size.',0,4,5],
    ['rat','Ratzo 500','$5480','65','390','132/133','139/140','none','none','$1370','$1000','$270','$540','Frankenstein\'s Monster of the Rat pack, a composite of wrecks.',0,5,6],
    ['sport','Stiletto 600','$6990','75','410','134/135','141/142','none','none','$1740','$1000','$340','$690','The best buy in the shop, a superbly-balanced machine.',0,6,7],
    ['sport','Perro 250','$9190','75','280','138/139','145/146','none','none','$2290','$1000','$450','$910','Socket-popping acceleration and surgical flickability.',0,7,8],
    ['sport','Kamakazi 750','$11980','100','510','140/141','147/148','none','none','$2990','$1000','$590','$1190','Smoother and more stable than any competitive 750 on the road.',0,8,9],
    ['sport','Diablo 750','$13790','90','440','142/143','150/151','none','none','$3440','$1000','$680','$1370','Blazing speed and sharp handling devastate the competition.',0,9,10],
    ['sport', 'DMG 1000','$16870','120','515','152/153','159/160','none','none','$4210','$1000','$840','$1680','A reliable heavyweight for the Rasher who likes to brawl.',0,10,11],
    ['super','Corsair 600 N','$18990','100','430','146/147','154/155','165/167','173/175','$4740','$1000','$940','$1890','Nitro and a fishy frame make it hard to hold a line at speed.',4,11,12],
    ['super','Kamakazi 750 N','$21780','120','520','149/150','157/158','168/170','177/179','$5440','$1000','$1080','$2170','A quick steerer with a frame that begs the stress of nitro.',6,12,13],
    ['super','Banzai 750 1100','$29990','140','450','163/165','172/173','none','none','$7490','$1000','$1490','$2990','Middleweight on steroids, an 1100 stuffed into a 750 chasis.',0,13,14],
    ['super','Stiletto 900 N','$34880','140','490','157/158','165/166','178/179','186/188','$8720','$1000','$1740','$3480','An ultra-light 900 with nitrous muscle, it takes a steady hand.',6,14,15],
    ['super','Diablo 1000 N','$40000','160','490','160/162','169/170','181/183','190/192','$10000','$1000','$2000','$3990','The most monstrous production bike ever to rule the road.',8,15,16],
    ['wild','Wild Thing 2000','$50000','???','???','199/201','209/210','225/227','237/238','$12500','$1000','$2500','$4990','Hop onboard and open up a 5 gallon jug whupass on the competition.',8,16,15]

]

var bikeObjects ={
    bike :[],
    currentCat:'',
    prevTarget: ''
};

function createBike([cat, name, price, hp, lbs, initSpeed, topSpeed, nitroSpeed,topNitroSpeed,performance, armor,tires, suspension,description,nitroCharge,bikeNumber, betterBike]){
 this.cat=cat;
 this.name=name;
 this.price=price;
 this.hp=hp;
 this.lbs=lbs;
 this.initSpeed=initSpeed;
 this.topSpeed=topSpeed;
 this.nitroSpeed=nitroSpeed;
 this.topNitroSpeed=topNitroSpeed;
 this.performance=performance;
 this.armor=armor;
 this.tires=tires;
 this.suspension=suspension;
 this.pic = 'img/'+name +'.png';
 this.description=description;
 this.nitroCharge=nitroCharge;
 this.bikeNumber=bikeNumber;
 this.betterBike=betterBike;
}

for (let i=0; i<bikes.length; i++)
{
   
    bikeObjects.bike.push(new createBike(bikes[i]));
    //bikeObjects.push(new createBike(bikes[i][0],bikes[i][1],bikes[i][2],bikes[i][3],bikes[i][4],bikes[i][5],bikes[i][6],bikes[i][7]));
}
//alert(bikeObjects.bike[0].name);
