import React,{useContext,useCallback,useEffect} from "react";
import "../css/AdminSongStyle.css";
import useScript from "../hook/useScripts.js";
import AppContext from "./AppContext.js";
import axios from "axios";
export default function AdminManageSong() {
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
  useScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
  return (
    <React.Fragment>
      <body class="bodyadminsong">
        <header class="headeradminsong">
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
                  <a href="/Upload">Upload</a>
                </li>
                <li>
                  <a href="/">
                    Log out <span></span>
                  </a>
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
            <div class="text_user">
              Song List<span></span>
            </div>
            <div class="list_user">
              <nav>
                <ul>
                  {songs.map((songs)=>(
                    <li>
                    {songs.name}
                    <button>
                      <span>
                        <i class="bi bi-trash3"></i>
                        </span>
                    </button>
                  </li>

                  ))}
 
                </ul>
              </nav>
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
                <script src="./picture/wavify.js"></script>
                <script src="./picture/jquery.wavify.js"></script>
                {/*
            <script>
              var myWave = $("linkmyID").wavify({
                height: 20,
                bones: 8,
                amplitude: 100,
                color: "link1b4d5a",
                speed: 0.5,
              });
            </script>*/}
              </div>
            </div>
          </div>
        </header>
      </body>
    </React.Fragment>
  );
}
