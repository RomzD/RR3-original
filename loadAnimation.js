function loadAnimation(e,currCat, newCat, prevTarget){ //  alert(currCat);
    if (currCat !== newCat)
    {
      //turn off animation
        switch(currCat){
            case 'rat':
                let menuRatDiv = document.querySelector('.bikeList div:nth-child(1)');  
                menuRatDiv.classList.remove('ratCat');          
                menuRatDiv.style.animationName = 'unlightRat';
                menuRatDiv.animationDirection ='alternate';             
            break;
            case 'sport':
                var menuSportDiv = document.querySelector('.bikeList div:nth-child(2)');  
                menuSportDiv.style.animationName = 'unlightSport';
                menuSportDiv.style.animationDuration ='3s';
                menuSportDiv.classList.remove('sportCat');
            break;
            case 'super':
                var menuSuperDiv = document.querySelector('.bikeList div:nth-child(3)');        
                menuSuperDiv.style.animationName = 'unlightSuper';
                menuSuperDiv.style.animationDuration ='3s';
                menuSuperDiv.classList.remove('superCat');               
            break;
            default:
                break;
        }      
        //end of turn on
        //turn on animation
        switch(newCat){
            case 'rat':
                let menuRatDiv = document.querySelector('.bikeList div:nth-child(1)');  
                menuRatDiv.style.animationName = 'lightRat';               
                menuRatDiv.style.animationDuration ='3s';
                menuRatDiv.classList.add('ratCat');        
            break;
            case 'sport':
                var menuSportDiv = document.querySelector('.bikeList div:nth-child(2)');  
                menuSportDiv.style.animationName = 'lightSport';
                menuSportDiv.style.animationDuration ='3s';
                menuSportDiv.classList.add('sportCat');
            break;
            case 'super':
                var menuSuperDiv = document.querySelector('.bikeList div:nth-child(3)');  
                menuSuperDiv.style.animationName = 'lightSuper';
                menuSuperDiv.style.animationDuration ='3s';
                menuSuperDiv.classList.add('superCat');
            break;
            default:
                break;
        }
        //end of turn off
    }
    //end if
    if (!(e.target===prevTarget)){
      var  newCatUC=newCat[0].toUpperCase() + newCat.slice(1,newCat.length);      
        
        // prevCatUC= prevCatUC[0];     
       if(typeof prevTarget==="object"){       
        var currCatUC= currCat[0].toUpperCase() +currCat.slice(1,currCat.length);
     //   alert(currCatUC);
        prevTarget.style.animationName='unbutton'+currCatUC;
        prevTarget.style.animationDirection='normal';
        prevTarget.style.animationIterationCount='1';
        prevTarget.style.animationDuration='1s';
        prevTarget.classList.remove(currCat+'Cat');
       }
       e.target.style.animationIterationCount='infinite';
       e.target.style.animationDirection='alternate';
       e.target.style.animationName= 'button'+newCatUC;
       e.target.style.animationDuration='1s';
     //  alert(newCatUC);
     // e.target.classList.add(newCat +'Cat');
    }

    }

