function formHintObjects(){
    var hintsArray= [
         ["carBoost","Car boosts & penalties","Every time bike passes the car, it get boosted after bike and passed car will get from each other on certain amout of range. To get the boost bike should be on the road, bike should be on a gas, bike should be straight or in a minor cornering. If boost moment comes while bike is placed on the grass, then you're getting a speed penalty for amount of boosted miles"]
        ,["stackBoost","Stacking the boosts", "Amount of car boosts is accurate to amount of passed cars in certain range of time, so if you're lucky, up to 3-4 boosts can be obtained."]
        ,["nitro","Using nitro before getting the boost","To make more sufficent using of boosts, use a nitro before boost time should approach. Nitro itself has 3 phases: raise, max and decrease. Max phase has 3 ticks while it is being bounced in range of 3 miles of maximized speed. Exactly in this phase is possible to get largest amout of boosted miles from the car. Depends on the bike, but up to 17 if player is on the wild thing 2000. Regular boost is from 4 to 7 miles. Again, it depends on a bike and road attitude."]
        ,["boost storage", "Boost storage","After car &  bike get from each other to distance when boost triggers, it being \'stored\' until player gets on gas pedal, thats why: 1) if you're already saving boost on the grass you won't be penalized until gas is triggered 2) you can go on the road and get additional speed boost. "]
        ,["saveBoost","Saving car boosts on the grass", "When the niro phase switches from max to decrease it is possible to slow speed decreasion down by 2 times by riding on the grass through all phase of nitro decrease."]
        ,["noGas","Get off the gas while on grass","This is not crucial, even for speedrun, to lose the speed for a short time, but for long time is. If you're got off the road, turn off the gas, while getting back on the road to avoid huge speed penalty."]
        ,["turning","Fast and frequent turning","Fast, short and frequent turning is useful while tires are oiled or stained, or you need to get back on the road without speed penalty."]
        ,["jumps","Jumping and how speed reduction works","Speed reduction on the fly depends on what is under the bike: road or grass. Flying above the grass will slow speed reduction."]
        ,["kicks","Kick 'em strategy","Most effecient strategy to deal with enemy bikers is just to kick 'em. To throw off enemy biker, kick should be performed with large amount of momentum which can be gained by riding from on side of the road to another before the kick."]
        ,["carHitBox","Car hit boxes","Car hit boxes aren't exactly match car's model. Especially while you make car overtake through the corner. That's why it is best to avoid cars as much as possible."]
        ,["carBehavior","Cars behavior on road obstacles","Traffic cars can break and stop right before obstacles like people, animals and other cars. So it is crucial to get in the middle of the road or change lane in advance of overtaking."]
        ,["luckyLuc","Lucky luc's oil","Lucky luc is known pain in the ass during the speedrun. But he becomes even more dangerous if his oil will be grabbed by player. Once it happened, Luc will try to kick player off with tremendous appetite. Better just to kick him off the bike when it is possible."]
        ,["obstacles","Some obstacles are harmless","Known fact, but can be confusing during the speedrun. Obstacles like long yellow signs on the grass are pretty harmless"]
        ,["strategy","2 or more lvl strategy","If you're after a long speedrun or longplay it's crucial to get fastest bike possible to the first race of each level. Otherwise even top 3 finish becomes hard to achieve."]
        ,["tracCorners","Corners of the track","Right corners of the track(right edge of the grass) are usually act as a road, so you can accelerate and nitroing like on a road itself. Dunno what to do with it, but just a fact."]
        ,["teleCars","Teleporting cars","If bike is fast and so are traffic cars, be prepared for crossroad's car teleportation. It hurts."]

    ]
    function createHint([id,hint, desc]){
        this.hint=hint;
        this.desc=desc;
        this.id=id;
        
    }

    var hintsObjects=[];
     hintsArray.forEach(element=>{
        hintsObjects.push(new createHint(element));
    }) ;

    return hintsObjects;
}
var hintsObjects= formHintObjects();