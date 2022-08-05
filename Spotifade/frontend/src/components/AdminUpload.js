import React from "react";
import "../css/AdminUpload.css";
import useScript from "../hook/useScripts.js";
export default function AdminUpload() {
  useScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
  return (
    <React.Fragment>
      <body class="bodyadminsong">
        <header class="headeradminupload">
          <div class="menu_side">
            <h1>Spotifade</h1>
            <div class="menu_list">
              <a href="/AdminManageUser">
                <h4>
                  <span></span>
                  <i class="bi bi-person-lines-fill"></i>User
                </h4>
              </a>
              <a href="/AdminManageSong">
                <h4 class="active" id="active">
                  <span></span>
                  <i class="bi bi-music-note-beamed"></i>Song
                </h4>
              </a>
            </div>
            <div class="founder_side">
              20127442 - Tôn Thất Bách <br />
              20127475 - Nguyễn Trần Đại Dương
              <br />
              20127596 - Nguyễn Như Phước
              <br />
              20127599 - Lê Quân
              <br />
            </div>
          </div>
          <div class="data_side">
            <nav>
              <div class="search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search Music" />
              </div>

              <ul>
                <li>
                  <a href="/Upload">
                    Upload music <span></span>
                  </a>
                </li>
                <li>
                  <a href="/Login">Log out</a>
                </li>
              </ul>
            </nav>
            <div
              class="carousel js-flickity"
              data-flickity-options='{ "wrapAround": true }'
            >
              <div class="image">
                <img src="./picture/img1.jpg" alt="" id="poster_master_play" />
              </div>
              <div class="image">
                <img src="./picture/img2.jpg" alt="" id="poster_master_play" />
              </div>
              <div class="image">
                <img src="./picture/img3.jpg" alt="" id="poster_master_play" />
              </div>
              <div class="image">
                <img src="./picture/img4.jpg" alt="" id="poster_master_play" />
              </div>
              <div class="image">
                <img src="./picture/img5.jpg" alt="" id="poster_master_play" />
              </div>
              <div class="image">
                <img src="./picture/img4.jpg" alt="" id="poster_master_play" />
              </div>
              <div class="image">
                <img src="./picture/img3.jpg" alt="" id="poster_master_play" />
              </div>
            </div>
            <div class="uploadInfo">
              <div class="songName">
                <label for="name" class="name">
                  Name:{" "}
                </label>
                <input
                  type="text"
                  name="song_name"
                  placeholder="Enter song's name..."
                  required
                />
              </div>
              <br />
              <div class="songAuthor">
                <label for="name" class="name">
                  Author:{" "}
                </label>
                <input
                  type="text"
                  name="song_author"
                  placeholder="Enter song's author..."
                  required
                />
              </div>
              <br />
              <div class="songUrl">
                <label for="name" class="name">
                  Url:{" "}
                </label>
                <input
                  type="text"
                  name="song_name"
                  placeholder="Enter song's url..."
                  required
                />
              </div>
              <br />
              <div class="songUrl">
                <label for="name" class="name">
                  Poster Url:{" "}
                </label>
                <input
                  type="text"
                  name="song_name"
                  placeholder="Enter song's url..."
                  required
                />
              </div>
              <input type="submit" value="Confirm" className="submit" />
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
              </div>
            </div>
          </div>
        </header>
      </body>
    </React.Fragment>
  );
}
