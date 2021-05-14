window.addEventListener('load',()=>{
  var articleDiv = document.querySelector('article');
 var keyFrames=[{opacity:0, marginTop: '2em'},{opacity:1,marginTop:0}];
 //var keyFrames=[{opacity:0},{opacity:1}];
  var settings = {duration:500, fill: 'forwards'};
  articleDiv.animate(keyFrames,settings);

})