const music = new Audio("C:\\Users\\Admin\\Desktop\\ProjectSE\\Group07\\Spotifade\\FrontEnd\\src\\1.mp3");

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
    }  else{
        console.log('cc');
    }
})