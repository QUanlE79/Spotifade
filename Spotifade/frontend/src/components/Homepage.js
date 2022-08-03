import React from "react";
import "../css/HomepageStyle.css";
import useScript from "../hook/useScripts.js";
export default function Homepage() {
  useScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
  useScript("../effect/HP.js");
  return (
    <React.Fragment>
      <body>
        <header>
          <div class="menu_side">
            <h1>Spotifade</h1>
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
                <li>My Profile</li>
                <li>Log out</li>
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
        <script src="../src/effect/HP.js"></script>
      </body>
    </React.Fragment>
  );
}
