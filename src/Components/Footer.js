import React, { Component } from "react"
import "./CSS/Footer.css"
import { SocialIcon } from 'react-social-icons';
import {NavLink} from "react-router-dom"
import Nav from "react-bootstrap/Nav"



class Footer extends Component
{
    render()
    {
        return(
            <div className = "footerC">
                <div className = "container2">
                    <div className = "row">
                        <div className = "col-sm-12 col-md-10">
                            <h6>About</h6>
                            <p className = "text-justify">We are an important part of a community that consist of people from different countries and cities. We have hundreds of friends from 60+ universities in Turkey.
                                We improve our academical, technical and social skills all together.
                                We know that GPA is not everything – we often hang out together, sometimes with other student branches!
                                With numerous activities, we are one of the most active student communities in Bilkent University.
                                Because IEEE Bilkent is the first step to expand your horizon.</p>
                        </div>
                        <div className = "col-xs-6 col-md-2">
                            <h6>Quick Links</h6>
                            <ul className = "footer-links">
                                <Nav.Link exact as = {NavLink} className = "navs2" to="/">Home</Nav.Link>
                                <Nav.Link as = {NavLink} className = "navs2" to="/aboutUs">About Us</Nav.Link>
                                <Nav.Link as = {NavLink} className = "navs2" to ="/team">Team</Nav.Link>
                            </ul>
                        </div>
                    </div>
                <hr />
                </div>
                <div className = "container2">
                    <div className = "row">
                        <div className = "col-md-8 col-sm-6 col-xs-12">
                            <p className = "copyright-text">Copyright &copy; 2020 All Rights Reserved by IEEE Bilkent.</p>
                        </div>
                        <div className = "col-md-4 col-sm-6 col-xs-12">
                            <ul className = "social-icons">
                                <SocialIcon className = "socialIcons" url="http://facebook.com/BilkentIEEE" />
                                <SocialIcon className = "socialIcons" url="http://twitter.com/bilkentieee" />
                                <SocialIcon className = "socialIcons" url="https://www.linkedin.com/company/bilkent-ieee-renci-kolu/" />
                                <SocialIcon className = "socialIcons" url="https://www.instagram.com/ieeebilkent" /> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer