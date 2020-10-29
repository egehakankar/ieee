import React, { Component } from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import {NavLink} from "react-router-dom"
import "./CSS/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            tabChecker: false
        }
        this.tabClick = this.tabClick.bind(this)
    }

    tabClick()
    {  
        this.setState(state => ({
            tabChecker: !state.tabChecker,
          }));
    }

    render()
    {
        return(
                    <header className="masthead mb-auto">
                        <Navbar className = "header" variant="dark">
                            <Navbar.Brand as = {NavLink} to="/"><img className = "LogoH" src = "https://images2.imgbox.com/78/fa/UxJmFR4r_o.png" alt = "" /></Navbar.Brand>
                            <Nav className="navM">
                                <Nav.Link exact as = {NavLink} className = "navs" to="/">Home</Nav.Link>
                                <Nav.Link as = {NavLink} className = "navs" to="/aboutUs">About Us</Nav.Link>
                                <Nav.Link as = {NavLink} className = "navs" to ="/team">Team</Nav.Link>
                                <NavDropdown className = "navs" alignRight title="Activities" id="nav-dropdown">
                                    <NavDropdown.Item as = {NavLink} to = "/technical" className = "dropdown-item2" eventKey="4.1">Technical Activities</NavDropdown.Item> 
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as = {NavLink} to = "/social" className = "dropdown-item2" eventKey="4.2">Social Activities</NavDropdown.Item>
                                </NavDropdown>
                                </Nav>
                            <div className = "tabB2">
                                <button className = "tabButton" onClick = {this.tabClick}><img className = "tabB" src="https://images2.imgbox.com/1e/93/6wkQXOp3_o.png" alt = "" /></button>        
                            </div>
                        </Navbar>
                        <div className = "mobileC">
                            <div style = {this.state.tabChecker ? {marginTop: '61px'} : {marginTop: '-90px'}} className = "tab2Y show dropdown-menu-right">
                                <div className = "tab2">
                                    <Navbar variant="dark">
                                        <Nav className = "navTabM">
                                            <Nav.Link exact as = {NavLink} className = "menusTab" to="/" onClick = {this.tabClick}>Home</Nav.Link>
                                            <Nav.Link as = {NavLink} className = "menusTab" to="/aboutUs" onClick = {this.tabClick}>About Us</Nav.Link>
                                            <Nav.Link as = {NavLink} className = "menusTab" to="/team" onClick = {this.tabClick}>Team</Nav.Link>
                                        </Nav>
                                    </Navbar>
                                    <Navbar className = "tabBranch" variant="dark">
                                            <NavDropdown.Item as = {NavLink} to ="/social" className = "dropdown-item3" eventKey="4.1" onClick = {this.tabClick}>Social Activites</NavDropdown.Item> 
                                            <NavDropdown.Item as = {NavLink} to ="/technical" className = "dropdown-item3" eventKey="4.2" onClick = {this.tabClick}>Technical Activites</NavDropdown.Item>
                                    </Navbar>
                                </div>
                            </div>
                        </div>
                    </header>
        )
    }
}

export default Header