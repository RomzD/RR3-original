async function loadAnimation(e, isForward){//function to chain all animation in 1 promise.
    
    
    var trackName = e.target.className.slice(0,2);
    console.log(trackName);

    return isForward ? 
    drawMenu(e, trackName ,isForward).then (
            ()=> {return openWhiteSheet(isForward)}
                ).then (//2nd animation = darken opened menu
                        ()=>{ fillWS(e,isForward)}
                        ) :/*else*/
     fillWS(e,isForward).then( 
                            ()=> {return openWhiteSheet(isForward)}
                            )//hide WS
                            .then(//hide menu
                                ()=> {return drawMenu(e,trackName,isForward)});
                            //end of else
}