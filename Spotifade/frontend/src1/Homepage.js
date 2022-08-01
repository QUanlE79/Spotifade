var path = "../src/1.mp3";
const music = new Audio(path);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add('active2');
    masterPlay.classList.add('bi-pause-fill');
    masterPlay.classList.remove('bi-play-circle-fill');
  } else {
    music.pause();
    wave.classList.remove('active2');
    masterPlay.classList.remove('bi-pause-fill');
    masterPlay.classList.add('bi-play-circle-fill');
  }
});
