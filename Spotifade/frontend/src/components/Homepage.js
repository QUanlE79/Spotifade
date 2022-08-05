import React, { useCallback, useContext, useEffect } from "react";
import "../css/HomepageStyle.css";
import axios from "axios";
import useScript from "../hook/useScripts.js";
import AppContext from "./AppContext.js";
//import Playmusic from "../effect/HP";
export default function Homepage() {
  useScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
  const {state,dispatch}=useContext(AppContext);
  const {songs,user,users}=state;
  const getAllSongs = useCallback( async () => {
    try {
      const option={
        method:'get',
        url:'/api/v1/song'
      }
      const response=await axios(option);
      const songs =response.data.data.songs;
      
      dispatch({type: 'GET_ALL_SONGS',payload:songs});
    } catch (error) {
      console.log(error);
    }
  },[dispatch]);
useEffect(()=>{
    getAllSongs();
},[getAllSongs])

console.log(state); 

// useEffect(()=>{
//   var path = './music/1.mp3';
//   const music = new Audio(path);
//   Array.from(document.getElementsByClassName("song_item")).forEach((e, i) => {
//   var Author = `${songs[i].name} <div class="subtitle">${songs[i].author}</div>`;
//   e.getElementsByTagName("img")[0].src = songs[i].Poster_url;
//   e.getElementsByTagName("h5")[0].innerHTML = Author;
//   });
  
//   let masterPlay = document.getElementById("masterPlay");
//   let wave = document.getElementById("wave");
  
//   masterPlay.addEventListener("click", () => {
//   if (music.paused || music.currentTime <= 0) {
//     music.play();
//     wave.classList.add("active2");
//     masterPlay.classList.add("bi-pause-fill");
//     masterPlay.classList.remove("bi-play-circle-fill");
//   } else {
//     music.pause();
//     wave.classList.remove("active2");
//     masterPlay.classList.remove("bi-pause-fill");
//     masterPlay.classList.add("bi-play-circle-fill");
//   }
//   });
//   const makeAllPlays = () => {
//   Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
//     el.classList.add("bi-play-circle");
//     el.classList.remove("bi-pause-circle");
//   });
//   };
//   const makeAllBackGround = () => {
//   Array.from(document.getElementsByClassName("song_item")).forEach((el) => {
//     el.style.background = "rgb(105, 105, 105, .0)";
//   });
//   };
//   let index = 0;
//   let poster_master_play = document.getElementById("poster_master_play");
//   Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
//   e.addEventListener("click", (el) => {
//     index = el.target.id;
//     music.src = songs[index - 1].Audio_Url;
//     poster_master_play.src = songs[index - 1].Poster_url;
//     music.play();
//     masterPlay.classList.add("bi-pause-fill");
//     masterPlay.classList.remove("bi-play-circle-fill");
  
//     var Author = `${songs[index - 1].name} <div class="subtitle">${
//       songs[index - 1].author
//     }</div>`;
//     document.getElementById("title").innerHTML = Author;
//     makeAllBackGround();
//     Array.from(document.getElementsByClassName("song_item"))[
//       index - 1
//     ].style.background = "rgb(105, 105, 105, .1)";
//     makeAllPlays();
//     el.target.classList.remove("bi-play-circle");
//     el.target.classList.add("bi-pause-circle");
//     wave.classList.add("active2");
//   });
//   });
  
//   let currentStart = document.getElementById("currentStart");
//   let currentEnd = document.getElementById("currentEnd");
//   let seek = document.getElementById("seek");
//   let bar2 = document.getElementById("bar2");
//   let dot = document.getElementsByClassName("dot")[0];
//   music.addEventListener("timeupdate", () => {
//   let music_curr = music.currentTime;
//   let music_dur = music.duration;
  
//   let min1 = Math.floor(music_dur / 60);
//   let sec1 = Math.floor(music_dur % 60);
  
//   if (sec1 < 10) {
//     sec1 = `0${sec1}`;
//   }
//   currentEnd.innerText = `${min1}:${sec1}`;
  
//   let min2 = Math.floor(music_curr / 60);
//   let sec2 = Math.floor(music_curr % 60);
//   if (sec2 < 10) {
//     sec2 = `0${sec2}`;
//   }
  
//   currentStart.innerText = `${min2}:${sec2}`;
  
//   let progressBar = parseInt((music_curr / music_dur) * 100);
//   seek.value = progressBar;
//   let seekbar = seek.value;
//   bar2.style.width = `${seekbar}%`;
//   dot.style.left = `${seekbar}%`;
//   });
  
//   seek.addEventListener("change", () => {
//   music.currentTime = (seek.value * music.duration) / 100;
//   });
  
//   let vol_icon = document.getElementById("vol_icon");
//   let vol = document.getElementById("vol");
//   let vol_bar = document.getElementsByClassName("vol_bar")[0];
//   let vol_dot = document.getElementById("vol_dot");
  
//   vol.addEventListener("change", () => {
//   if (vol.value === 0) {
//     vol_icon.classList.remove("bi-volume-up");
//     vol_icon.classList.remove("bi-volume-down");
//     vol_icon.classList.add("bi-volume-off");
//   }
//   if (vol.value > 0) {
//     vol_icon.classList.remove("bi-volume-up");
//     vol_icon.classList.add("bi-volume-down");
//     vol_icon.classList.remove("bi-volume-off");
//   }
//   if (vol.value > 50) {
//     vol_icon.classList.add("bi-volume-up");
//     vol_icon.classList.remove("bi-volume-down");
//     vol_icon.classList.remove("bi-volume-off");
//   }
//   let vol_a = vol.value;
//   console.log(vol.value);
//   vol_bar.style.width = `${vol_a}%`;
//   vol_dot.style.left = `${vol_a}%`;
//   music.volume = vol_a / 100;
//   });
  
//   let back = document.getElementById("back");
//   let next = document.getElementById("next");
  
//   back.addEventListener("click", (el) => {
//   index -= 1;
//   if (index < 1) {
//     index = Array.from(document.getElementsByClassName("song_item")).length;
//   }
  
//   music.src = songs[index - 1].Audio_Url;
//   poster_master_play.src = songs[index - 1].Poster_url;
//   music.play();
//   masterPlay.classList.add("bi-pause-fill");
//   masterPlay.classList.remove("bi-play-circle-fill");
  
//   var Author = `${songs[index - 1].name} <div class="subtitle">${
//     songs[index - 1].author
//   }</div>`;
//   document.getElementById("title").innerHTML = Author;
//   makeAllBackGround();
//   Array.from(document.getElementsByClassName("song_item"))[
//     index - 1
//   ].style.background = "rgb(105, 105, 105, .1)";
//   makeAllPlays();
//   el.target.classList.remove("bi-play-circle");
//   el.target.classList.add("bi-pause-circle");
//   wave.classList.add("active2");
//   });
  
//   next.addEventListener("click", (el) => {
//   index++;
//   if (index > Array.from(document.getElementsByClassName("song_item")).length) {
//     index = 1;
//   }
//   music.src = songs[index - 1].Audio_Url;
//   poster_master_play.src = songs[index - 1].Poster_url;
//   music.play();
//   masterPlay.classList.add("bi-pause-fill");
//   masterPlay.classList.remove("bi-play-circle-fill");
  
//   var Author = `${songs[index - 1].name} <div class="subtitle">${
//     songs[index - 1].author
//   }</div>`;
//   document.getElementById("title").innerHTML = Author;
//   makeAllBackGround();
//   Array.from(document.getElementsByClassName("song_item"))[
//     index - 1
//   ].style.background = "rgb(105, 105, 105, .1)";
//   makeAllPlays();
//   el.target.classList.remove("bi-play-circle");
//   el.target.classList.add("bi-pause-circle");
//   wave.classList.add("active2");
//   });
  
//   music.addEventListener("ended", (el) => {
//   index++;
//   if (index > Array.from(document.getElementsByClassName("song_item")).length) {
//     index = 1;
//   }
//   music.src = songs[index - 1].Audio_Url;
//   poster_master_play.src = songs[index - 1].Poster_url;
//   music.play();
//   masterPlay.classList.add("bi-pause-fill");
//   masterPlay.classList.remove("bi-play-circle-fill");
  
//   var Author = `${songs[index - 1].name} <div class="subtitle">${
//     songs[index - 1].author
//   }</div>`;
//   document.getElementById("title").innerHTML = Author;
//   makeAllBackGround();
//   Array.from(document.getElementsByClassName("song_item"))[
//     index - 1
//   ].style.background = "rgb(105, 105, 105, .1)";
//   makeAllPlays();
//   el.target.classList.remove("bi-play-circle");
//   el.target.classList.add("bi-pause-circle");
//   wave.classList.add("active2");
//   }); 
// })
  return (
    <React.Fragment>
      <body>
        <header>
          <div class="menu_side">
            <a href="/Homepage">
              <h1>Spotifade</h1>
            </a>
            <div class="playlist">
              <h4 class="active" id="active">
                <span></span>
                <i class="bi bi-music-note-beamed"></i>Playlist
              </h4>
              <h4>
                <span></span>
                <i class="bi bi-music-note-beamed"></i>Last Listening
              </h4>
              <h4>
                <span></span>
                <i class="bi bi-music-note-beamed"></i>Recommended
              </h4>
            </div>
            <div class="menu_song">
              <li class="song_item">
                <span>01</span>
                <img src="./picture/img1.jpg" alt="Concho" />
                <h5>
                  Gau Gau Gau
                  <div class="subtitle">Ang ang</div>
                </h5>
                <i class="bi playListPlay bi-play-circle" id="1"></i>
              </li>
              <li class="song_item">
                <span>02</span>
                <img src="./picture/img1.jpg" alt="Concho" />
                <h5>
                  Gau Gau Gau
                  <div class="subtitle">Ang ang</div>
                </h5>
                <i class="bi playListPlay bi-play-circle" id="2"></i>
              </li>
              <li class="song_item">
                <span>03</span>
                <img src="./picture/img1.jpg" alt="Concho" />
                <h5>
                  Gau Gau Gau
                  <br />
                  <div class="subtitle">Ang ang</div>
                </h5>
                <i class="bi playListPlay bi-play-circle" id="3"></i>
              </li>
              <li class="song_item">
                <span>04</span>
                <img src="./picture/img1.jpg" alt="Concho" />
                <h5>
                  Gau Gau Gau
                  <br />
                  <div class="subtitle">Ang ang</div>
                </h5>
                <i class="bi playListPlay bi-play-circle" id="4"></i>
              </li>
            </div>
          </div>
          <div class="song_side">
            <nav>
              <div class="search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search Music" />
              </div>

              <ul>
                <li>
                  Category <span></span>
                </li>
                <li>
                  <a href="/UserInfomation">My Profile</a>
                </li>
                <li>
                  <a href="/">Log out</a>
                </li>
              </ul>
            </nav>
            <div
              class="carousel js-flickity"
              data-flickity-options='{ "wrapAround": true }'
            >
              <div class="image">
                {" "}
                <img
                  src="./picture/img1.jpg"
                  alt=""
                  id="poster_master_play1"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img2.jpg"
                  alt=""
                  id="poster_master_play2"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img3.jpg"
                  alt=""
                  id="poster_master_play3"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img4.jpg"
                  alt=""
                  id="poster_master_play4"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img5.jpg"
                  alt=""
                  id="poster_master_play5"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img4.jpg"
                  alt=""
                  id="poster_master_play6"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img3.jpg"
                  alt=""
                  id="poster_master_play7"
                />{" "}
              </div>
            </div>
            <div class="textrandom">
              Random Song<span></span>
            </div>
            <div
              class="random_song js-flickity"
              data-flickity-options='{ "wrapAround": true }'
            >
              <li class="song_item">
                <img src="./picture/img1.jpg" alt="Concho" />
                <i class="bi playListPlay bi-play-circle" id="5"></i>
                <h5>
                  Gau Gau Gau
                  <br />
                  <div class="subtitle">Ang ang</div>
                </h5>
              </li>
              <li class="song_item">
                <img src="./picture/img1.jpg" alt="Concho" />
                <i class="bi playListPlay bi-play-circle" id="6"></i>
                <h5>
                  Gau Gau Gau
                  <br />
                  <div class="subtitle">Ang ang</div>
                </h5>
              </li>
              <li class="song_item">
                <img src="./picture/img1.jpg" alt="Concho" />
                <i class="bi playListPlay bi-play-circle" id="7"></i>
                <h5>
                  Gau Gau Gau
                  <br />
                  <div class="subtitle">Ang ang</div>
                </h5>
              </li>
              <li class="song_item">
                <img src="./picture/img1.jpg" alt="Concho" />
                <i class="bi playListPlay bi-play-circle" id="8"></i>
                <h5>
                  Gau Gau Gau
                  <br />
                  <div class="subtitle">Ang ang</div>
                </h5>
              </li>
              <li class="song_item">
                <img src="./picture/img1.jpg" alt="Concho" />
                <i class="bi playListPlay bi-play-circle" id="9"></i>
                <h5>
                  Gau Gau Gau
                  <br />
                  <div class="subtitle">Ang ang</div>
                </h5>
              </li>
              <li class="song_item">
                <img src="./picture/img1.jpg" alt="Concho" />
                <i class="bi playListPlay bi-play-circle" id="10"></i>
                <h5>
                  Gau Gau Gau
                  <br />
                  <div class="subtitle">Ang ang</div>
                </h5>
              </li>
            </div>
            <div class="outline">
              <span></span>
              <div class="wave">
                <section>
                  <svg
                    width="100%"
                    height="100%"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path id="myID" d="" />
                  </svg>
                  <h2>Welcome to Spotifade</h2>
                </section>
                <script
                  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
                  integrity="sha512-VEBjfxWUOyzl0bAwh4gdLEaQyDYPvLrZql3pw1ifgb6fhEvZl9iDDehwHZ+dsMzA0Jfww8Xt7COSZuJ/slxc4Q=="
                  crossorigin="anonymous"
                  referrerpolicy="no-referrer"
                ></script>
                <script
                  src="https://code.jquery.com/jquery-3.6.0.js"
                  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
                  crossorigin="anonymous"
                ></script>
                <script src="./effect/wavify.js"></script>
                <script src="./effect/jquery.wavify.js"></script>
              </div>
            </div>
          </div>

          <div class="master_play">
            <div class="wave" id="wave">
              <div class="wave1"></div>
              <div class="wave1"></div>
              <div class="wave1"></div>
            </div>
            <img src="./picture/img1.jpg" alt="" id="poster_master_play" />
            <h5 id="title">
              Gau Gau Gau
              <div class="subtitle">Con Cho</div>
            </h5>
            <div class="icon">
              <i class="bi shuffle bi-music-note-beamed">next</i>
              <i class="bi bi-skip-start-fill" id="back"></i>
              <i class="bi bi-play-circle-fill" id="masterPlay"></i>
              <i class="bi bi-skip-end-fill" id="next"></i>
              <i class="bi bi-download" id="download_music"></i>
            </div>
            <span id="currentStart">0:00</span>
            <div class="bar">
              <input type="range" id="seek" min="0" max="100" />
              <div class="bar2" id="bar2"></div>
              <div class="dot"></div>
            </div>
            <span id="currentEnd">0:30</span>
            <div class="vol">
              <i class="bi bi-volume-up" id="vol_icon"></i>
              <input type="range" min="0" max="100" id="vol" />
              <div class="vol_bar"></div>
              <div class="dot" id="vol_dot"></div>
            </div>
          </div>
        </header>
      </body>
    </React.Fragment>
  );
}
