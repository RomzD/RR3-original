function  loadStyle(cat){
    var bikePicDiv= document.querySelector('.bikeItself');
    switch(cat){
        case 'rat': bikePicDiv.style.boxShadow = '5px 5px 10px rgba(253, 23, 23, 0.7),-5px -5px 10px rgba(253, 23, 23, 0.7)';
        break;
        case 'sport': bikePicDiv.style.boxShadow = '5px 5px 10px rgba(10, 255, 10, 0.7),-5px -5px 10px rgba(10, 255, 10, 0.7)';
        break;
        case 'super':bikePicDiv.style.boxShadow = '5px 5px 10px rgba(255, 56, 205, 0.7),-5px -5px 10px rgba(255, 56, 205, 0.7)';
        break;
        default:
            bikePicDiv.style.boxShadow = '5px 5px 10px rgba(9, 4, 248, 0.7),-5px -5px 10px rgba(9, 4, 248, 0.7)';
            break;
    }

}