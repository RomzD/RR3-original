function fillTable(){
    var tableBody = document.querySelector('table tbody');
   
      for (let i=1;i<tableData[0].length; i++)//5 iterations
      {
        var tr=document.createElement('tr'); 
      
                for (let j=0; j<tableData.length ;j++){//11 iterations
                    
                  var td= document.createElement('td');
                  
                  if(j===0){
                    
                    if (i===1)//add "place" text in 1st col
                    {
                       var tdForPlaceCol = document.createElement('td');                                        
                       let span = document.createElement('span');
                       tdForPlaceCol.className='tdPlaceClosed';
                       tdForPlaceCol.classList.add('tdPlace');
                       span.textContent="place";
                       span.className='tablePlace';
                       tdForPlaceCol.rowSpan='10';   
                       tdForPlaceCol.appendChild(span);

                        tr.appendChild(tdForPlaceCol); //add blank td to get spacing for "place" column    
                       }     
                       var placeTd = document.createElement('td');
                       let spanText = document.createElement('span');
                       if (i<4){                      
                       let spanImg = document.createElement('span');   
                       let img = document.createElement('img') ;
                       img.className='placeImg';
                       img.src=i===1 ? 'firstPlace.png': i===2 ? 'secondPlace.png': 'thirdPlace.png';                 
                       img.alt="Image of the prize cup";
                       spanImg.appendChild(img);
                       placeTd.appendChild(spanImg);
                       }
                       spanText.textContent=i;
                       placeTd.appendChild(spanText);                       
                       tr.appendChild(placeTd);                              
                    }
                    if (i%2===0){
                    tr.className='tableTR';
                    }
                    td.textContent=tableData[j][i] + (tableData[j][i] === 'TBD' ? " ": ' $');
                    tr.appendChild(td);
                  
                  }
                    tableBody.appendChild(tr);
      }    
}

    function tableEvents(){
    var expandBtn = document.querySelector('.expandButton');
    var tableDiv =document.querySelector('.tableContainer');
    var tdPlace = document.querySelector('.tablePlace');
    var tableTr = document.querySelectorAll('.tableTR');
    var keyFrames= [{paddingTop:'0px'},{paddingTop:'200px'}];

    expandBtn.addEventListener('click', ()=>{
          if (tableDiv.classList.contains('tableContainerOpened'))
          {  
          tableDiv.classList.remove('tableContainerOpened');
          expandBtn.classList.remove('expandButtonOpened');
          expandBtn.classList.add('expandButtonClosed');
          tableDiv.classList.add('tableContainerClosed');         
          tdPlace.animate(keyFrames,{duration: 1000, fill:"forwards", direction: 'reverse'});
          tableTr.forEach(element=>element.classList.remove('tableTROpened')
          );
          tableTr.forEach(element=>element.classList.add('tableTRClosed')
            );
          }
          else 
          {
            tableTr.forEach(element=>element.classList.add('tableTROpened')
            );
            tableTr.forEach(element=>element.classList.remove('tableTRClosed')
          );
          tableDiv.classList.add('tableContainerOpened'); 
          tableDiv.classList.remove('tableContainerClosed');
          expandBtn.classList.add('expandButtonOpened');
          expandBtn.classList.remove('expandButtonClosed');
          tdPlace.animate(keyFrames,{duration: 1000, fill:"forwards"});
        
          }
        })
    }


fillTable();//fill
tableEvents();