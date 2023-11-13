import "./VideoPage.css";
import logo from "./YouTube-Logo.png";
import image from "./image.jpeg";
import profile from "./dog.jpg";
import menulogo from "./logo/menu.png"
import miclogo from "./logo/mic.png"
import notificationlogo from "./logo/notification.png"
import uploadlogo from "./logo/upload.png"
import likelogo from "./logo/like.png"
import dislikelogo from "./logo/dislike.png"
import sharelogo from "./logo/share.png"
import downloadlogo from "./logo/download.png"
import cliplogo from "./logo/clip.png"


const VideoPage = () => {
    return (
        <div className="vieopage">
            <div className="header">
            <div className="logowithmenu">
                    <img className="menulogo" src={menulogo} height="45px"></img>
                    <a href="http://localhost:3000/login"><img className="logo" src={logo} alt="image" height="100px"/></a>
                </div>
                <div className="search">
                    <input className="searchbar" type="text" placeholder="Search"></input>
                    <button className="searchbutton">Search</button>
                    <div className="micbutton"><img className="miclogo" height="23px" src={miclogo}></img></div>
                </div>
                {/* <div class="signin" alt="Sign_in">
                    <img className="profile" src={profile}></img>
                </div> */}
                 <div className="signup">
                    <img className="upload" src={uploadlogo}></img>
                    <img className="notification" src={notificationlogo}></img>
                    <img className="profilephoto" src={profile}></img>
                </div>
            </div>
            <div className="mainbody">
                <div className="maincontent">
                <div className="viewmainvideo">
                <div class="contentitem item1">
                        <div className="videoitembox">
                        <iframe className="videoplay" src="https://www.youtube.com/embed/qp0-L_M3Ad4?si=DAV6KPgwb8HsL0ou&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="videodetails">
                            <div className="caption caption1"><b>Build a Portfolio Website With Next JS, Tailwind CSS & Framer Motion</b></div>
                            <div className="videoholderdetail">
                                <div className="userlogos userimages1">
                                    <img className="image1" src={image}></img>
                                </div>
                                <div className="holdernamewithtime">
                                    <div className="accountholders holdernames1"><b>NiiSuu Leitan</b></div>
                                    <div className="subscribers">256k subscribers</div>
                                </div>
                                <div className="subscribebutton"><b>Subscribe</b></div>
                                <div className="controlbox">
                                    <div className="ctrbutton1 likebutton">
                                        <div className="like">
                                            <img className="likelogo" src={likelogo} height="20px"></img>
                                            <div className="liketext">1.5k</div>
                                        </div>
                                        <div className="dislike">
                                            <img className="dislikelogo" src={dislikelogo} height="20px"></img>
                                        </div>
                                        <div className="share">
                                            <img className="sharelogo" src={sharelogo} height="20px"></img>
                                            <div className="sharetext">Share</div>
                                        </div>
                                    </div>
                                    <div className="ctrbutton downloadbutton">
                                        <img className="downloadlogo" src={downloadlogo} height="20px"></img>
                                        <div className="downloadtext">Download</div>
                                    </div>
                                    <div className="ctrbutton clipbutton">
                                        <img className="cliplogo" src={cliplogo} height="20px"></img>
                                        <div className="cliptext">Clip</div>
                                    </div>
                                    <div className="ctrbutton morebutton">
                                        <div className="moretext"><h3>...</h3></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="descriptionbox">
                            <p>84k views 6 months ago</p>
                            20,075,014 views  Premiered Feb 20, 2020
                            Songdew Network presents to you Prats' latest single 'Aziyat'. Releasing this 6 days after the valentines, but we hope you still shower the same amount of love and support like you always do. Its 20th Feb, what we call the missing day in the Valentine's week. 
                        </div>
                    </div>
                </div>
                    <div className="viewsidevideo">
                        <div className="recommendedbar">
                            <div className="recommendedbox">
                                <div className="optionbar">
                                    <button className="sideupperbutton b1"><h3>All</h3></button>
                                    <button className="sideupperbutton b2"><h3>Related</h3></button>
                                    <button className="sideupperbutton b3"><h3>Recently uploaded</h3></button>
                                    <button className="sideupperbutton b4"><h3>Watched</h3></button>
                                </div>
                                <div className="videowithdetails">
                                    <div className="recommendedvideos v1">
                                        <a href="http://localhost:3000/video"><img className="sidevideo" src="https://i.ytimg.com/vi/5E0yLJ57aGA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDod5j7YFBv4HbX1wWz34Rz84-LNg"></img></a>
                                    </div>
                                    <div className="sidevidieodetails">
                                        <div className="sidevideocaption"><h4>Chaal Chal Tu Ppni Me Tujhe Pehchan Lunga (Lyrics) | Tu hai kahan | AUR</h4></div>
                                        <div className="sidevideoholder">Taal Music</div>
                                        <div className="sidevideotime">158k views . 1 years ago</div>
                                    </div>
                                </div>
                                <div className="videowithdetails">
                                    <div className="recommendedvideos v1">
                                        <a href="http://localhost:3000/video"><img className="sidevideo" src="https://i.ytimg.com/vi/6SHDOquLXyo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDS5isokclH80aCnYminTvfsC2s5A"></img></a>
                                    </div>
                                    <div className="sidevidieodetails">
                                        <div className="sidevideocaption"><h4>Little Do You Know || Alex &  Sierra (Lyrics) || King Of Kings || Nilapati</h4></div>
                                        <div className="sidevideoholder">MA_VIBES🎧</div>
                                        <div className="sidevideotime">227k views . 8 months ago</div>
                                    </div>
                                </div>
                                <div className="videowithdetails">
                                    <div className="recommendedvideos v1">
                                        <a href="http://localhost:3000/video"><img className="sidevideo" src="https://i.ytimg.com/vi/I8Rqh5Xh3Yc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGWhBe-KrB-ZVRTsWzO-UarEPCRg"></img></a>
                                    </div>
                                    <div className="sidevidieodetails">
                                        <div className="sidevideocaption"><h4>Ice On My Baby - Yung Bleu (Lyrics) | ice on my baby (slowed reverb)</h4></div>
                                        <div className="sidevideoholder">Anime Editing Image</div>
                                        <div className="sidevideotime">312k views . 10 months ago</div>
                                    </div>
                                </div>
                                <div className="videowithdetails">
                                    <div className="recommendedvideos v1">
                                        <a href="http://localhost:3000/video"><img className="sidevideo" src="https://i.ytimg.com/vi/vJLF5o6wpdY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBYuiVO37QgEd2QcE7tFHubPfpF4w"></img></a>
                                    </div>
                                    <div className="sidevidieodetails">
                                        <div className="sidevideocaption"><h4>Mix - SING-OFF TIKTOK SONGS PART X vs Mirriam Eka</h4></div>
                                        <div className="sidevideoholder">Oppa Music</div>
                                        <div className="sidevideotime">69k views . 4 months ago</div>
                                    </div>
                                </div>
                                <div className="videowithdetails">
                                    <div className="recommendedvideos v1">
                                        <a href="http://localhost:3000/video"><img className="sidevideo" src="https://i.ytimg.com/vi/JAgP8WcaRMc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7zRl86rUMASr9u05m8QGgIOATZw"></img></a>
                                    </div>
                                    <div className="sidevidieodetails">
                                        <div className="sidevideocaption"><h4>our most dangerous TROPHY winning match (Clash of Clans)</h4></div>
                                        <div className="sidevideoholder">Sumit 007</div>
                                        <div className="sidevideotime">54k views . 2 years ago</div>
                                    </div>
                                </div>
                                <div className="videowithdetails">
                                    <div className="recommendedvideos v1">
                                        <a href="http://localhost:3000/video"><img className="sidevideo" src="https://i.ytimg.com/vi/gLgleiKej84/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBuYkaIYHRk1LwxTjpglsvhi3EsZA"></img></a>
                                    </div>
                                    <div className="sidevidieodetails">
                                        <div className="sidevideocaption"><h4>Ruth B - Dandelions (lyrics) | Ellie Goulding | Fifty Fifty | Stephen Sanchez | Public | TT</h4></div>
                                        <div className="sidevideoholder">TT XD 84</div>
                                        <div className="sidevideotime">64k views . 1 months ago</div>
                                    </div>
                                </div>
                                <div className="videowithdetails">
                                    <div className="recommendedvideos v1">
                                        <a href="http://localhost:3000/video"><img className="sidevideo" src="https://i.ytimg.com/vi/WPL_B8O340g/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB_tgCZgsV7-9rJG5I0JsYOwUxh1w"></img></a>
                                    </div>
                                    <div className="sidevidieodetails">
                                        <div className="sidevideocaption"><h4>Mix - NPTE - The LuMais (ft. Yarsin & Yelhomie) Official MV Part 1 2022</h4></div>
                                        <div className="sidevideoholder">Tantha Music</div>
                                        <div className="sidevideotime">14k views . 15 days ago</div>
                                    </div>
                                </div>
                                <div className="videowithdetails">
                                    <div className="recommendedvideos v1">
                                        <a href="http://localhost:3000/video"><img className="sidevideo" src="https://i.ytimg.com/vi/sw28JZYtpXk/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD1s6ruL-PZfJ2yQA-RuSCsmayhdQ"></img></a>
                                    </div>
                                    <div className="sidevidieodetails">
                                        <div className="sidevideocaption"><h4>Naitom Satpi | Malemleima Telem | Jelish & Ratana Ksh | Official Music Video Release</h4></div>
                                        <div className="sidevideoholder">Tantha</div>
                                        <div className="sidevideotime">41k views . 7 months ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPage;