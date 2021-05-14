var openedMenu ;


function launchAnimation(e){

    if( typeof openedMenu === 'object' && e.target.className.slice(0,2) !== openedMenu.target.className.slice(0,2))
    {
        console.log('targets sliced classnames are ' +e.target.className.slice(0,2) +' ' + openedMenu.target.className.slice(0,2));
    loadAnimation(openedMenu, false).then(
        ()=> loadAnimation(e,true)
    )
    }
    else if( openedMenu !== undefined && e.target.className.slice(0,2) !== openedMenu.target.className.slice(0,2) ) {
        loadAnimation(e,true);
    }
    else if (openedMenu === undefined){
        loadAnimation(e,true);
    }
    openedMenu=e;

}
