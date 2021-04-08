import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from './Button';


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://www.back4blood.com/en-us">
                        <img src="/images/back_4_blood.jpeg" />
                        </a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Back 4 Blood<span className="job-title">Order Now!!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://bethesda.net/en/game/deathloop">
                        <img src="/images/deathloop.jpeg" />
                        </a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Deathloop<span className="job-title">Order Now!!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://www.ubisoft.com/en-us/game/far-cry/far-cry-6">
                        <img src="/images/far_cry_6.png" />
                        </a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Far Cry 6<span className="job-title">Order Now!!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <a href="https://www.halowaypoint.com/en-us/games/halo-infinite">
                        <img src="/images/halo_infinite.png" />
                        </a>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Halo Infinite<span className="job-title">Order Now!!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <a href="https://hitman.com/us/">
                        <img src="/images/hitman_3.jpeg" />
                    </a>    
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Hitman 3<span className="job-title">Order Now!!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <a href="https://www.playstation.com/en-us/games/horizon-forbidden-west/">
                        <img src="/images/horizon_forbidden_west.jpeg" />
                    </a>    
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Horizon Forbidden West<span className="job-title">Order Now!!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <a href="https://www.monsterhunter.com/rise/us/">
                        <img src="/images/monster_hunter_rise.jpeg" />
                    </a>    
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Monster Hunter Rise<span className="job-title">Order Now!!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <a href="https://outriders.square-enix-games.com/en-us/">
                        <img src="/images/outriders.jpeg" />
                    </a>    
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Outriders<span className="job-title">Purchase Now!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <a href="https://insomniac.games/game/ratchet-clank-rift-apart/">
                        <img src="/images/ratchet_and_clank.png" />
                    </a>    
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Ratchet and Clank: Rift Apart<span className="job-title">Purchase now!</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                    <a href="https://www.residentevil.com/village/us/">
                        <img src="/images/Resident_Evil_Village.png" />
                    </a>    
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                    <div className="details">
                        <h2>Resident Evil Village <span className="job-title">Purchase now</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider

