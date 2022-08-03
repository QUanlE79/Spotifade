import React from "react";
import "../css/UserInfoStyle.css";
export default function UserInfo() {
  return (
    <React.Fragment>
      <body>
        <header>
          <div class="menu_side">
            <h1>Spotifade</h1>
            <div class="playlist">
              <h4 class="active" id="active">
                <span></span>
                <i class="bi bi-person-circle"></i>Infomation
              </h4>
              <h4>
                <span></span>
                <i class="bi bi-music-note-list"></i>Playlist
              </h4>
            </div>
            <div class="menu_song">
              <li class="song_item">
                <span>01</span>
                <img src="./picture/img1.jpg" alt="Concho" />
                <h5>
                  Gau Gau Gau
                  <div class="subtitle">Ang ang</div>
                  <i class="bi playListPlay bi-play-circle" id="1"></i>
                </h5>
              </li>
              <li class="song_item">
                <span>02</span>
                <img src="./picture/img1.jpg" alt="Concho" />
                <h5>
                  Gau Gau Gau
                  <div class="subtitle">Ang ang</div>
                  <i class="bi playListPlay bi-play-circle" id="1"></i>
                </h5>
              </li>
              <li class="song_item">
                <span>03</span>
                <img src="./picture/img1.jpg" alt="Concho" />
                <h5>
                  Gau Gau Gau
                  <div class="subtitle">Ang ang</div>
                  <i class="bi playListPlay bi-play-circle" id="1"></i>
                </h5>
              </li>
              <li class="song_item">
                <span>04</span>
                <img src="./picture/img1.jpg" alt="Concho" />
                <h5>
                  Gau Gau Gau
                  <div class="subtitle">Ang ang</div>
                  <i class="bi playListPlay bi-play-circle" id="1"></i>
                </h5>
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
                <li>My Profile</li>
                <li>Log out</li>
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
                <h2>Quan Le</h2>
                <h3>Username: lequan2k2.ql</h3>
                <h3>Email: lequan2k2.ql@gmail.com</h3>
                <h3>Phone: 09876543211 </h3>
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
              Gau Gau Gau
              <div class="subtitle">Con Cho</div>
            </h5>
            <div class="icon">
              <i class="bi shuffle bi-music-note-beamed">next</i>
              <i class="bi bi-skip-start-fill"></i>
              <i class="bi bi-play-circle-fill" id="masterPlay"></i>
              <i class="bi bi-skip-end-fill"></i>
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
