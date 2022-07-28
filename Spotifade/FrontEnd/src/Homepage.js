var path = "../src/1.mp3";
const music = new Audio(path);

let masterPlay = document.getElementById("masterPlay");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
  } else {
    music.pause();
  }
});
