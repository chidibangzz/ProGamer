import { Button } from './Button'
import '../App.css'
import React from 'react'
import './HeroSection.css'
import ImageSlider from "./Slider"

function HeroSection() {
    return ( 
        <div className='hero-container'>
            <video src="/videos/Chinese.mp4"autoPlay loop muted />
            <ImageSlider />
        </div>
    )   
}

export default HeroSection
