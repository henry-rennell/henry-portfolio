import "./Projects.css"
import { Swiper, SwiperSlide, } from "swiper/react"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import 'swiper/css'
import "swiper/css/navigation";


export default function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <Swiper
                spaceBetween={50}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            >
                <SwiperSlide>
                    <div className="project">
                        <img src="/images/byo-backing-track.png" alt="" />
                        <h3>BYO-Backing-Track</h3>
                        <p>A React based Midi Platform that allows Musicians to create audio Loops to practise/compose over.</p>
                        <span className="link">
                            <a href="https://github.com/henry-rennell/byo-backing-track">GitHub Link</a>
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="/images/whats-happening-app.png" alt="" />
                        <h3>Whats Happening App</h3>
                        <p>A Full-Stack Node.Js, Express.Js, PostgreSQL project that allows users to Post Details of Gigs they organise to a network of users, </p>
                        <span className="link">
                            <a href="https://github.com/henry-rennell/whats-happening-app">GitHub Link</a>
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="/images/tik-stock-app.png" alt="" />
                        <h3>TikStock App</h3>
                        <p>TikStok is a React App that makes Client-Side API calls to retreive up-to-date stock information</p>
                        <span className="link">
                            <a href="https://github.com/henry-rennell/tik-stock-app">GitHub Link</a>
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <img src="/images/tic-tac-toe.png" alt="" />
                        <h3>Tic Tac Toe</h3>
                        <p>A Client Side Javascript Tic Tac Toe game, it allows the users to enter their name and even keeps track of the players wins within that session</p>
                        <span className="link">
                            <a href="https://pages.git.generalassemb.ly/henry-rennell/Project1/">Play It Here!</a>
                        </span>

                    </div>
                </SwiperSlide>
            </Swiper> 

        </div>

    )
}