import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SiteInfo from '../SiteInfo/SiteInfo'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
import './style.css'

export default function Header() {
  return (
    <div className="header">
      {/* <div className="header-title"> */}
        <SiteInfo />
        <WeatherInfo />
      {/* </div> */}
    </div>
  )
}
