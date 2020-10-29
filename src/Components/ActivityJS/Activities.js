import React, { Component } from 'react';
import "../CSS/Activities.css"
import { NavLink } from "react-router-dom"
import Nav from "react-bootstrap/Nav"

class Activities extends Component {
    render() {
        let userFeed = this.props.datalar.map(function (datalar, index) {
            return (
                <ul key={datalar.id}>
                    <li key={datalar.id}>
                        <Nav.Link branch={this.props.branch} className="eventsCss" as={NavLink} to={"/" + this.props.branch + "/" + datalar.id}>
                            <div className="event" style={{ backgroundImage: `url(${datalar.backGroundPhoto})`, backgroundPosition: 'center' }}>
                                {datalar.title}
                            </div>
                        </Nav.Link>
                    </li>
                </ul>
            )
        }, this).reverse();
        return (
            <div>
                {userFeed}
            </div>
        );
    }

}

export default Activities;