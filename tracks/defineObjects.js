
// -----begin define track objects 
var tracks = [
    ['br','Brazil','Easy track while you\'re able to stay in ongoing direction lane. Car spawn is frequent and unpredictable because of big amount of small hills. Pretty useful is to change lane from right to left before and in long left corner in the middle of the track. That will safe you from drift, if you\'ll drive through the dirt or oil. Although is worth mention, that if you\'ll be on fast bike be prepared for teleporting cars on crossroads. This doesn\'t happen when player\'s bike is slow. ',[55.7, 78.8, 106, 'none', 158.9]],
    ['it','Italy', 'Shortest track of level 1. Easy overall, but has some speciality. In general not really nessesary to keep bike by ongoing direction lane excluding situations when bike is in downside of the hill. Hard to avoid obstacles during corner passing when u\'re trying to save boosts on a grass. Therefore, try to manipulate bike as less as possible to avoid crashes and save boosts. Track has only 1 major hill, which you can possibly pass without losing major amount of speed by flying above the the grass by the left side. If you\'ll set up jump correctly, 0.1-0.2 secs can be saved.',[54, 72.7, 'none', 125.9, 150.6]],
    ['uk','U.K.', 'Always stay in left lane. All corners are smooth, a lot really RANDOM obstacles. Has 2 hills with random habit. One of them is on 7-9 corner from the beginning, should be handled by holding bike on the left edge of the road. While the other hill is on a straight road part. Enemy bikers are somewhy very agressive in 1st part of the track. The \'kick \'em\' strategy is proofed to be most useflul',[55 , 78.8, 105.8, 'none', 170.9]],
    ['gr','Germany', 'Easiest and longest track. Most of corners are easy and smooth, except two. Track requires tires and suspension upgrades because of them. Without upgrades getting corners in right fanshion is almost impossible. Strategy of sharp corners is pretty easy: place bike to the spot near the side of the road by corner\'s direction side and begin to turn by pressing joystick direction button fast and short right before the corner begin. After a few attempts, track will become the easiest in 1 lvl portfolio ',[58.3, 80.1, 103, 127, 'none']],
    ['kn','Kenya', 'A lot of hills which affect the bike in pretty random fashion from attempt to attempt. That\'s why track comes first in speedrun attempts. Track you should learn the most to handle car boosts(read hints for more info) right. Stay on the ongoing direction side. First two hills should be passed by left side and with short and frequent turning after 2nd hill. On 3rd hill bike should be moved from right to left to prevent long jump. Other hills are pretty random, but maybe in the future hill\'s nature will be discovered more. ',[54, 'none', 'none', 141.7, 164.9]],
    ['au','Australia', 'Unlocks on level 2. Pretty easy and smooth track right until you get fast bike, then lag hell just breaks loose. Track got a lot of really long lefthanders so stay in the left lane to get them right. Also a lot of dangerous obstacles on the grass, so make shure to stay on the road even if it will cost you a speed penalty.',['none', 78, 105.4, 135, 'none']],
    ['jp','Japan', 'Unlocks on level 3. Smooth and straight overall, but has a couple of raisins like huge amount of predefined obstacles by ongoing side of the road which appear every race and pretty crazy oncoming traffic. Therefore, try to stay on ongoing direction lane near the center. Most stragiht and lag free track of all seven.',['none', 'none', 106, 140.9, 163.6]]                        
]
function track(cat,name, desc, longevity){
this.cat=cat;
this.name= name;
this.desc=desc;
this.longevity=longevity;
}

var trackObjects=[];

for( var i=0;i<tracks.length;i++){trackObjects.push(new track(tracks[i][0], tracks[i][1], tracks[i][2], tracks[i][3]));} 
//-----end define track objects

//------begin define keyFrames
var endFrame={clipPath: 'polygon(9.603% 0%,93.603% 0%, 84% 100%, 0% 100%)', filter: 'saturate(100%)',  zIndex: 50};
var keyFramesArr =[
        [  'br', /*from*/ [{  filter: 'saturate(0%)',clipPath : ' polygon(9.603% 0%, 21.603% 0%, 12% 100%, 0% 100%)', zIndex: 1 }, /*to*/ endFrame ]],
                          /*clip-path: polygon(9.603% 0%, 21.603% 0%, 12% 100%, 0% 100%); from is always equal to *Small polygon from css layout */
        [  'it', /*from*/ [{ filter: 'saturate(0%)', clipPath : ' polygon(21.603% 0%, 33.603% 0%, 24% 100%, 12% 100%)', zIndex: 1 }, /* to */ endFrame]],
        [  'gr', /*from*/ [{ filter: 'saturate(0%)',clipPath : ' polygon(33.603% 0%, 45.603% 0%, 36% 100%, 24% 100%)', zIndex: 1 }, /* to */ endFrame]],
        [  'kn', /*from*/ [{ filter: 'saturate(0%)',clipPath : ' polygon(45.603% 0%, 57.603% 0%, 48% 100%, 36% 100%)', zIndex: 1 }, /* to */ endFrame]],
        [  'uk', /*from*/ [{ filter: 'saturate(0%)',clipPath : ' polygon(57.603% 0%, 69.603% 0%, 60% 100%, 48% 100%)', zIndex: 1 }, /* to */ endFrame]],
        [  'au', /*from*/ [{ filter: 'saturate(0%)',clipPath : ' polygon(69.603% 0%, 81.603% 0%, 72% 100%, 60% 100%)', zIndex: 1 }, /* to */ endFrame]],
        [  'jp', /*from*/ [{ filter: 'saturate(0%)',clipPath : ' polygon(81.603% 0%, 93.603% 0%, 84% 100%, 72% 100%)', zIndex: 1 }, /* to */ endFrame]],

]//-----end define key frames
var settingsForward = {   duration: 200,    fill: "forwards" }
var settingsBackward= {   duration: 200,    fill: "forwards", direction: 'reverse' }
//define animation settings. Animation settings are same for all of the menu nodes

var tableData = [
    ["1","1000","750","500","400","300","200","150","120","100","80"],
    ["2","2000","1500","1000","800","600","400","300","240","200","160"],
    ["3","4000","3000","2000","1600","1200","800","600","480","400","320"],
    ["4","6000","4500","3000","2400","1800","1200","900","720","600","480"],
    ["5","10000","7500","5000","4000","3000","2000","1500","1200","1000","800"]
];