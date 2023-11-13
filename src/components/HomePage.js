import "./HomePage.css";
import logo from "./YouTube-Logo.png";
import image from "./image.jpeg";
import profile from "./dog.jpg";
import homelogo from "./logo/home.png"
import shortslogo from "./logo/shorts.png"
import subscriptionlogo from "./logo/subs.png"
import yourchannellogo from "./logo/your.png"
import historylogo from "./logo/histroy.png"
import yourvideologo from "./logo/video.png"
import watchlaterlogo from "./logo/watchLater.png"
import seemorelogo from "./logo/DROP.png"
import trendinglogo from "./logo/trending.png"
import shoppinglogo from "./logo/shopping.png"
import musiclogo from "./logo/music.png"
import livelogo from "./logo/live.png"
import gamelogo from "./logo/game.png"
import newslogo from "./logo/news.png"
import sportlogo from "./logo/sport.png"
import learninglogo from "./logo/learn.png"
import podcastlogo from "./logo/popcast.png"
import fashionlogo from "./logo/fashion.png"
import menulogo from "./logo/menu.png"
import notificationlogo from "./logo/notification.png"
import uploadlogo from "./logo/upload.png"
import miclogo from "./logo/mic.png"
import searchlogo from "./logo/search.png"
import youlogo from "./logo/DROPRIGHT.png"


const HomePage = () => {
    // const [videos, setVideos] = useState([]);

    return (
        <div className="youtube">
            <div className="header">
                {/* <!-- <div class="menubar">menu</div> --> */}
                <div className="logowithmenu">
                    <img className="menulogo" src={menulogo} height="45px"></img>
                    <a href="http://localhost:3000/login"><img className="logo" src={logo} alt="image" height="100px"/></a>
                </div>
                <div className="search">
                    <input className="searchbar" type="text" placeholder="Search"></input>
                    <button className="searchbutton"><img className="searchlogo" src={searchlogo} height="20px"></img></button>
                    <div className="micbutton"><img className="miclogo" height="23px" src={miclogo}></img></div>
                </div>
                <div className="signup">
                    <img className="upload" src={uploadlogo}></img>
                    <img className="notification" src={notificationlogo}></img>
                    <img className="profilephoto" src={profile}></img>
                </div>
            </div>
        {/* <div class="mainbody"> */}
            <div class="mainview">
                <div class="sidemenu">
                    <div className="uppersidebar">
                        <div className="upperbar home">
                            <img src={homelogo} height="25px"></img>
                            <div className="upperbarhome"><h4>Home</h4></div>
                        </div>
                        <div className="upperbar">
                            <img src={shortslogo} height="30px"></img>
                            <div className="upperbarhome"><h4>Shorts</h4></div>
                        </div>
                        <div className="upperbar">
                            <img src={subscriptionlogo} height="30px"></img>
                            <div className="upperbarhome"><h4>Subscriptions</h4></div>
                        </div>
                    </div>
                    <div className="line1"></div>
                    <div className="middlesidebar">
                        <div className="midbar">
                            <div className="midbaryou1"><h3>You</h3></div>
                            <img className="youlogo" src={youlogo} height="25px"></img>
                        </div>
                        <div className="midbar">
                            <img src={yourchannellogo} height="30px"></img>
                            <div className="midbaryou"><h4>Your Channel</h4></div>
                        </div>
                        <div className="midbar">
                            <img src={historylogo} height="30px"></img>
                            <div className="midbaryou"><h4>History</h4></div>
                        </div>
                        <div className="midbar">
                            <img src={yourvideologo} height="30px"></img>
                            <div className="midbaryou"><h4>Your videos</h4></div>
                        </div>
                        <div className="midbar">
                            <img src={watchlaterlogo} height="30px"></img>
                            <div className="midbaryou"><h4>Watch later</h4></div>
                        </div>
                        <div className="midbar">
                            <img src={yourvideologo} height="30px"></img>
                            <div className="midbaryou"><h4>Download</h4></div>
                        </div>
                        <div className="midbar">
                            <img className="seemorelogo" src={seemorelogo} height="30px"></img>
                            <div className="midbaryou"><h4>See more</h4></div>
                        </div>
                    </div>
                    <div className="line2"></div>
                    <div className="buttomsidebar">
                        <div className="buttombar bb1"><h3>Explore</h3></div>
                        <div className="buttombar">
                            <img src={trendinglogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Shoping</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={musiclogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Music</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={livelogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Live</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={gamelogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Gaming</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={newslogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>News</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={sportlogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Sports</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={learninglogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Learning</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={fashionlogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Fashion & Beauty</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={podcastlogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Podcast</h4></div>
                        </div>
                        <div className="buttombar">
                            <img src={shoppinglogo} height="30px"></img>
                            <div className="buttombarexplore"><h4>Shoping</h4></div>
                        </div>
                    </div>
                </div>
                <div className="viewcontent">
                    <div className="upperoptionbar">
                        <button className="upperbutton tag1"><h3>All</h3></button>
                        <button className="upperbutton b2"><h3>Related</h3></button>
                        <button className="upperbutton b3"><h3>Recently uploaded</h3></button>
                        <button className="upperbutton b4"><h3>Watched</h3></button>
                        <button className="upperbutton b2"><h3>Game</h3></button>
                        <button className="upperbutton b3"><h3>Mobile Legend</h3></button>
                        <button className="upperbutton b2"><h3>love song</h3></button>
                        <button className="upperbutton b3"><h3>Bollywood Songs</h3></button>
                        <button className="upperbutton b4"><h3>One piece</h3></button>
                        <button className="upperbutton b4"><h3>Anime</h3></button>
                        <button className="upperbutton b2"><h3>Musics</h3></button>
                        <button className="upperbutton b4"><h3>Fashion</h3></button>
                        <button className="upperbutton b2"><h3>Asian Ok</h3></button>
                        <button className="upperbutton b4"><h3>Okey Bae</h3></button>
                        <button className="upperbutton b2"><h3>Love You</h3></button>
                    </div>
                    <div class="viewcontentvideo">
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/qp0-L_M3Ad4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxUtITeTk0S3eXT0BbgxE0N7Ptbg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Build a Portfolio Website With Next JS</h4></div>
                            </div>
                            <div className="accountholder holdername1">NiiSuu Leitan</div>
                            <div className="timebox time1">826k views . 23 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/Yo3j_Dx4u7c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmQj9cjUS942RB3tNaXEi1HolI6g"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>This Cool JavaScript Effect Will Make Your Website 3D !</h4></div>
                            </div>
                            <div className="accountholder holdername1">True Coder</div>
                            <div className="timebox time1">8k views . 1 month ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/pRLOXUlIUG0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9ZEj0RZJZtTTK66gbKVDpIc1w_Q"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Prateek Kuhad - Mulaqat (Official Music Video)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Prateek Kuhad</div>
                            <div className="timebox time1">61k views . 17 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/AX6OrbgS8lI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDDy8rGWBeUAU-yjxlTcRI6Fly2eg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>AUR - TU HAI KAHAN - Raffey - Usama - Ahad (Official Music)</h4></div>
                            </div>
                            <div className="accountholder holdername1">AUR</div>
                            <div className="timebox time1">123k views . 6 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/5k58kWEuwJQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDXu2A6AxQSjvaIIFO2QAAXJYPiew"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Aziyat - Pratyush Dhiman [Official Video] ft. Jahnavi Rao</h4></div>
                            </div>
                            <div className="accountholder holdername1">PRATSOFICIAL</div>
                            <div className="timebox time1">543k views . 2 years ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/SMnudGQ0Yus/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCtKzoX4YeNwT4eJPtgrbNrOZ6ipA"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Teriyan Adavaan Munda Maar Sutteya (Full Video)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Nilapati</div>
                            <div className="timebox time1">51k views . 4 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/l1EssrLxt7E/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCod4tE9RfPS1LA__zbziCFiX6Jfg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Web Development Course</h4></div>
                            </div>
                            <div className="accountholder holdername1">Apna College</div>
                            <div className="timebox time1">216k views . 10 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/eYAd4uDotF0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGEANJoKw3Dq0KZD1ClqDM9sYNxg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Mix - Yuika - Sukidakara (Lyric Video)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Yuika</div>
                            <div className="timebox time1">365k views . 1 year ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/UNo0TG9LwwI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4Z4kXDFoAMb58yGUMv2NSziLJaQ"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>정국 (Jung Kook) 'Standing Next to You' Official MV</h4></div>
                            </div>
                            <div className="accountholder holdername1">Hype Lebels</div>
                            <div className="timebox time1">222k views . 9 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/sw28JZYtpXk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD1s6ruL-PZfJ2yQA-RuSCsmayhdQ"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Naitom Satpi | Official Music Video Release</h4></div>
                            </div>
                            <div className="accountholder holdername1">Tantha</div>
                            <div className="timebox time1">143k views . 3 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/7uQHw581Fqo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCio01E4mfLvOpRAJAd_fBIlhUz2g"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Emotional songs hit differently on Omegle ! Hindi Mashups</h4></div>
                            </div>
                            <div className="accountholder holdername1">Sobit Tamang</div>
                            <div className="timebox time1">169k views . 7 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/8GkPMG8IwBQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8obqvKqiyKCng5eapDWitKWwvBg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>AUR - Tu hai kahan (Lyrics)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Vibes Music</div>
                            <div className="timebox time1">769k views . 3 years ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/VDrO044VHpY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqWMDkVdk4KgiYek5Ovbhn5YKkaw"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Dooriyan - Dino James ft. Kaprila [Official Music Video]</h4></div>
                            </div>
                            <div className="accountholder holdername1">Dino James</div>
                            <div className="timebox time1">12k views . 5 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/Z0203cVXRWQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBIkEk5ty8aMUJJrHGkjJVrbarthA"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Mix - [C.C.] JUNHO❤YOONA on the stage✨ 《Señorita》 Covered</h4></div>
                            </div>
                            <div className="accountholder holdername1">Kpop on stage</div>
                            <div className="timebox time1">69k views . 9 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/d2d7ucCBS1E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAl5RywZO82DkjDgJ6ZbDnOGvhVsg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Maximillian - On My Mind (Lyric Video)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Love Life Lyrics</div>
                            <div className="timebox time1">101k views . 2 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/W7zjd0_vezg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAl4A92Yes14lWAddwNE1Wlc0bq7A"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>ruth b. - dandelions (cover)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Alecgis weng</div>
                            <div className="timebox time1">213k views . 2 years ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/lRVJuPI5IXI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_MiG7IaWP727XUEQ7egEHY24Uqw"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Fujii Kaze - "Shinunoga E-Wa" Live at Nippon Budokan (2020)</h4></div>
                            </div>
                            <div className="accountholder holdername1">Fujii Kaje</div>
                            <div className="timebox time1">16k views . 3 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/mefhyo7W3nk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJnAMbEyFWKgetZCfk60sQyKhAow"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Login and Registration Form in HTML & CSS</h4></div>
                            </div>
                            <div className="accountholder holdername1">Codehal</div>
                            <div className="timebox time1">44k views . 17 days ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/6SHDOquLXyo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDS5isokclH80aCnYminTvfsC2s5A"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>Little Do You Know || Alex &  Sierra (Lyrics)</h4></div>
                            </div>
                            <div className="accountholder holdername1">MA_VIBES🎧</div>
                            <div className="timebox time1">227k views . 8 months ago</div>
                        </div>
                        <div class="contentbox content1">
                            <div className="videobox">
                               <a href="http://localhost:3000/video"> <img className="video" src="https://i.ytimg.com/vi/4IHoU0cBFuE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxw60C6qW5w_3lSHeDYWPAc6phbg"></img></a>
                            </div>
                            <div className="videodetail">
                                <div className="userlogo userimage1">
                                    <img className="image" src={image}></img>
                                </div>
                                <div className="captionbox caption1"><h4>WATCH THIS ANIME RIGHT NOW🔥| MONSTER |</h4></div>
                            </div>
                            <div className="accountholder holdername1">BBF LIVE</div>
                            <div className="timebox time1">98k views . 7 days ago</div>
                        </div>
                    
                    </div>
                </div>
            </div>
         </div>
    // </div>
    );
};

export default HomePage;