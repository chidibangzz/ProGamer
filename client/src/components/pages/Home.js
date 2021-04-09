import React from 'react'
import Footer from '../Footer'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import ImageSlider from "../Slider"
import UpcomingVideoGames from '../UpcomingGames'

function Home() {
  return (
    <>
      <div className="container mt-5 carousel">
        <h1 className="slider_title">Hottest Games Out!!!</h1>
        <ImageSlider />
        <UpcomingVideoGames />
      </div>
      <Footer />

    </>
  )
}

export default Home;