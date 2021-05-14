async function openWhiteSheet(isForward){
    var whiteSheet = document.querySelector('.whiteSheet');
    
    var keyFrames =[ {
            background: 'transparent',                
            zIndex: '1'
        },
        {
            background: 'rgba(0, 0, 0, 0.384)',
            zIndex: '6000'
        }
    ];

    return isForward ? whiteSheet.animate(keyFrames, settingsForward).finished : whiteSheet.animate(keyFrames,settingsBackward).finished;
   
}
