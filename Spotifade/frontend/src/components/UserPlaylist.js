import React from "react";
import "../css/UserPlaylistStyle.css";
import useScript from "../hook/useScripts.js";
export default function User_playlist() {
  useScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
  useScript("../effect/HP.js");
  return (
    <React.Fragment>
      <body>
        <header>
          <div class="menu_side">
            <h1>Spotifade</h1>
            <div class="playlist">
              <h4>
                <span></span>
                <i class="bi bi-person-circle"></i>Infomation
              </h4>
              <h4 class="active" id="active">
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
            <div
              class="carousel js-flickity"
              data-flickity-options='{ "wrapAround": true }'
            >
              <div class="image">
                {" "}
                <img
                  src="./picture/img1.jpg"
                  alt=""
                  id="poster_master_play"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img2.jpg"
                  alt=""
                  id="poster_master_play"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img3.jpg"
                  alt=""
                  id="poster_master_play"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img4.jpg"
                  alt=""
                  id="poster_master_play"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img5.jpg"
                  alt=""
                  id="poster_master_play"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img4.jpg"
                  alt=""
                  id="poster_master_play"
                />{" "}
              </div>
              <div class="image">
                {" "}
                <img
                  src="./picture/img3.jpg"
                  alt=""
                  id="poster_master_play"
                />{" "}
              </div>
            </div>
            <div class="list_playlist">
              <nav>
                <ul>
                  <li>
                    <div class="playlistname">
                      PLaylist 1<span></span>
                    </div>
                    <div
                      class="playlist_song js-flickity"
                      data-flickity-options='{ "wrapAround": true }'
                    >
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="playlistname">
                      PLaylist 2<span></span>
                    </div>
                    <div
                      class="playlist_song js-flickity"
                      data-flickity-options='{ "wrapAround": true }'
                    >
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="playlistname">
                      PLaylist 3<span></span>
                    </div>
                    <div
                      class="playlist_song js-flickity"
                      data-flickity-options='{ "wrapAround": true }'
                    >
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="1"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
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
