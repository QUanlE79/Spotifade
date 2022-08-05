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
            <a href="/Homepage">
              <h1>Spotifade</h1>
            </a>
            <div class="playlist">
              <a href="/UserInfomation">
                <h4>
                  <span></span>
                  <i class="bi bi-person-circle"></i>Infomation
                </h4>
              </a>
              <a href="/UserPlaylist">
                <h4 class="active" id="active">
                  <span></span>
                  <i class="bi bi-music-note-list"></i>Playlist
                </h4>
              </a>
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
                <li>Category</li>
                <li>
                  <a href="/UserInfomation">
                    My Profile <span></span>
                  </a>
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
                        <i class="bi playListPlay bi-play-circle" id="5"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="6"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="7"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="8"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="9"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="10"></i>
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
                        <i class="bi playListPlay bi-play-circle" id="11"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="12"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="13"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="14"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="15"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="16"></i>
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
                        <i class="bi playListPlay bi-play-circle" id="17"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="18"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="19"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="20"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="21"></i>
                        <h5>Gau Gau Gau</h5>
                      </div>
                      <div class="song">
                        <img src="./picture/img1.jpg" alt="Concho" />
                        <i class="bi playListPlay bi-play-circle" id="22"></i>
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
