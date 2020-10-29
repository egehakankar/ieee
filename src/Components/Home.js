import React, { Component } from "react"
import HomeIC from "./HomeJS/HomeIC.js"
import SocialD from "./HomeJS/SocialD.js"
import LatestEvent from "./HomeJS/LatestEvent.js"
import MemberCount from "./HomeJS/MemberCount.js"
import "./CSS/Home.css"

class Home extends Component
{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render()
    {
        return(
            <div>
                <HomeIC />
                <SocialD />
                <LatestEvent />
                <MemberCount />
            </div>
        )
    }
}

export default Home