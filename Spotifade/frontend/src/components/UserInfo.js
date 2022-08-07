import React,{useContext} from "react";
import "../css/UserInfoStyle.css";
import useScript from "../hook/useScripts.js";
import AppContext from "./AppContext.js";
export default function UserInfo() {
  useScript("../effect/HP.js");
  const {state,dispatch}=useContext(AppContext);
  const{songs,user,users}=state
  
  return (
    <React.Fragment>
      <body>
        <header>
          <div class="menu_side">
            <a href="/Homepage">
              <h1>Spotifade</h1>
            </a>
            <div class="playlist">
              <a href="/UserInfomation">
                <h4 class="active" id="active">
                  <span></span>
                  <i class="bi bi-person-circle"></i>Infomation
                </h4>
              </a>
              <a href="/UserPlaylist">
                <h4>
                  <span></span>
                  <i class="bi bi-music-note-list"></i>Playlist
                </h4>
              </a>
            </div>
            <div class="menu_song">
              <li class="song_item">
                <span>01</span>
                <img src="./picture/img1.jpg" alt="undefine" />
                <h5>
                  Song name
                  <div class="subtitle">author</div>
                </h5>
                <i class="bi playListPlay bi-play-circle" id="1"></i>
              </li>
              <li class="song_item">
                <span>02</span>
                <img src="./picture/img1.jpg" alt="undefine" />
                <h5>
                  Song name
                  <div class="subtitle">author</div>
                </h5>
                <i class="bi playListPlay bi-play-circle" id="2"></i>
              </li>
              <li class="song_item">
                <span>03</span>
                <img src="./picture/img1.jpg" alt="undefine" />
                <h5>
                  Song name
                  <br />
                  <div class="subtitle">author</div>
                </h5>
                <i class="bi playListPlay bi-play-circle" id="3"></i>
              </li>
              <li class="song_item">
                <span>04</span>
                <img src="./picture/img1.jpg" alt="undefine" />
                <h5>
                  Song name
                  <br />
                  <div class="subtitle">author</div>
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
                <li>Category</li>
                <li>
                  <a href="/UserInfomation">
                    My Profile<span></span>
                  </a>
                </li>
                <li>
                  <a href="/">Log out</a>
                </li>
              </ul>
            </nav>
            <div class="infomation">
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
                <img src="./picture/img1.jpg" alt="" />
                <h3>Username: xxxx</h3>
                <h3>Email: xxxxyy@aaa.com</h3>
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

          <div class="master_play">
            <div class="wave" id="wave">
              <div class="wave1"></div>
              <div class="wave1"></div>
              <div class="wave1"></div>
            </div>
            <img src="./picture/img1.jpg" alt="" id="poster_master_play" />
            <h5 id="title">
              Song name
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
              <i class="bi bi-volume-up"></i>
              <input type="range" min="0" max="100" id="vol" />
              <div class="vol_bar"></div>
              <div class="dot" id="vol_dot"></div>
            </div>
          </div>
        </header>
        <script src="./effect/Homepage.js"></script>
      </body>
    </React.Fragment>
  );
}
