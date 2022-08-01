var path = "./music/1.mp3";
const music = new Audio(path);

const songs = [
  {
    id: 1,
    SongName: `Toccata`,
    Author: `Paul Mauriat`,
    Musiclink: "./music/1.mp3",
    poster: "./picture/img1.jpg",
  },
  {
    id: 2,
    SongName: `Bên Trên Tầng Lầu`,
    Author: `Tang Duy Tan`,
    Musiclink: "./music/2.mp3",
    poster: "./picture/img2.jpg",
  },
  {
    id: 3,
    SongName: `Don't Stop Me Now`,
    Author: `Queen`,
    Musiclink: "./music/3.mp3",
    poster: "./picture/img3.jpg",
  },
  {
    id: 4,
    SongName: `Ballade Pour Adeline`,
    Author: `Richard Clayderman`,
    Musiclink: "./music/4.mp3",
    poster: "./picture/img4.jpg",
  },
  {
    id: 5,
    SongName: `Để Nhớ Một Thời Ta Đã Yêu`,
    Author: `Bằng Kiều`,
    Musiclink: "./music/5.mp3",
    poster: "./picture/img5.jpg",
  },
  {
    id: 6,
    SongName: `Một Thời Đã Xa`,
    Author: `Phương Thanh`,
    Musiclink: "./music/6.mp3",
    poster: "./picture/img6.jpg",
  },
  {
    id: 7,
    SongName: `Em ơi Hà Nội Phố`,
    Author: `Bằng Kiều`,
    Musiclink: "./music/7.mp3",
    poster: "./picture/img7.jpg",
  },
  {
    id: 8,
    SongName: `Gloria`,
    Author: `Laura Branigan`,
    Musiclink: "./music/8.mp3",
    poster: "./picture/img8.jpg",
  },
  {
    id: 9,
    SongName: `Careless Whisper`,
    Author: `Geogre Michael`,
    Musiclink: "./music/9.mp3",
    poster: "./picture/img9.jpg",
  },
  {
    id: 10,
    SongName: `Cheri Cheri Lady`,
    Author: `Modern Talking`,
    Musiclink: "./music/10.mp3",
    poster: "./picture/img10.jpg",
  },
];

Array.from(document.getElementsByClassName("song_item")).forEach((e, i) => {
  var Author = `${songs[i].SongName} <div class="subtitle">${songs[i].Author}</div>`;
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = Author;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active2");
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-circle-fill");
  } else {
    music.pause();
    wave.classList.remove("active2");
    masterPlay.classList.remove("bi-pause-fill");
    masterPlay.classList.add("bi-play-circle-fill");
  }
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle");
    el.classList.remove("bi-pause-circle");
  });
};
const makeAllBackGround = () => {
  Array.from(document.getElementsByClassName("song_item")).forEach((el) => {
    el.style.background = "rgb(105, 105, 105, .0)";
  });
};
let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = songs[index - 1].Musiclink;
    poster_master_play.src = songs[index - 1].poster;
    music.play();
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-circle-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    songTitles.forEach((elss) => {
      elss = `${songs[index - 1].SongName} <div class="subtitle">${
        songs[index - 1].Author
      }</div>`;
      title.innerHTML = elss;
    });
    makeAllBackGround();
    Array.from(document.getElementsByClassName("song_item"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove("bi-play-circle");
    el.target.classList.add("bi-pause-circle");
    wave.classList.add("active2");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up");
    vol_icon.classList.remove("bi-volume-down");
    vol_icon.classList.add("bi-volume-off");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up");
    vol_icon.classList.add("bi-volume-down");
    vol_icon.classList.remove("bi-volume-off");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up");
    vol_icon.classList.remove("bi-volume-down");
    vol_icon.classList.remove("bi-volume-off");
  }
  let vol_a = vol.value;
  console.log(vol.value);
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("song_item")).length;
  }

  music.src = songs[index - 1].Musiclink;
  poster_master_play.src = songs[index - 1].poster;
  music.play();
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-circle-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    elss = `${songs[index - 1].SongName} <div class="subtitle">${
      songs[index - 1].Author
    }</div>`;
    title.innerHTML = elss;
  });
  makeAllBackGround();
  Array.from(document.getElementsByClassName("song_item"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle");
  el.target.classList.add("bi-pause-circle");
  wave.classList.add("active2");
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("song_item")).length) {
    index = 1;
  }
  music.src = songs[index - 1].Musiclink;
  poster_master_play.src = songs[index - 1].poster;
  music.play();
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-circle-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    elss = `${songs[index - 1].SongName} <div class="subtitle">${
      songs[index - 1].Author
    }</div>`;
    title.innerHTML = elss;
  });
  makeAllBackGround();
  Array.from(document.getElementsByClassName("song_item"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle");
  el.target.classList.add("bi-pause-circle");
  wave.classList.add("active2");
});

music.addEventListener("ended", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("song_item")).length) {
    index = 1;
  }
  music.src = songs[index - 1].Musiclink;
  poster_master_play.src = songs[index - 1].poster;
  music.play();
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-circle-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    elss = `${songs[index - 1].SongName} <div class="subtitle">${
      songs[index - 1].Author
    }</div>`;
    title.innerHTML = elss;
  });
  makeAllBackGround();
  Array.from(document.getElementsByClassName("song_item"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllPlays();
  el.target.classList.remove("bi-play-circle");
  el.target.classList.add("bi-pause-circle");
  wave.classList.add("active2");
});
