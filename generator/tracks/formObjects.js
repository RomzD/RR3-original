var tracksArr =[
    ['level 1',['br','uk','gr','it','kn']],//br uk gr it kn        1 4 2 5 3
    ['level 2',['br','uk','gr','it','au']],// ['level 2',['br','gr','au','uk','it']],
    ['level 3',['br','uk','gr','jp','au']],//['level 3',['br','gr','au','uk','jp']]
    ['level 4',['gr','it','kn','jp','au']],//  ['level 4',['gr','kn','au','it','jp']],
    ['level 5',['br','uk','it','kn','jp']],//['level 5',['br','it','jp','uk','kn']],
]

var trackObjects=[];

function track(lvl, trackArr){
this.lvl=lvl;
this.tracks=trackArr;
}



tracksArr.forEach(element => {
trackObjects.push(new track(element[0],element[1]));
});