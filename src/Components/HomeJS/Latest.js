import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import dataParPhoto from "../photos/pattern.png"
import "../CSS/Home.css"

const dataParPhotoSN = {
    backgroundImage: `url(${dataParPhoto})`,
    backgroundPosition: 'center',
    backgroundSize: 'auto'
};

class Latest extends Component {
    render() {
        return(
            <ul className = "latestDatas"> 
                {this.props.techData.slice(this.props.techData.length - 2, this.props.techData.length).map((activity) =>
                    <li className="latestData"  key={activity.id}>
                            <NavLink  to={"/technical/" + activity.id} className = "navLinksData">
                                <div className = "dataPhotos" style={{backgroundImage: `url(${activity.backGroundPhoto})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 'max-height'}}>
                                    <h1 className = "dataName">{activity.title}</h1>
                                </div>
                                <p className = "dataPar" style={dataParPhotoSN} >{activity.littleSummary}</p>
                            </NavLink>
                    </li>
                ).reverse()}
                {this.props.socialData.slice(this.props.socialData.length - 2, this.props.socialData.length).map((activity) =>
                    <li className="latestData"  key={activity.id}>
                            <NavLink  to={"/social/" + activity.id} className = "navLinksData">
                                <div className = "dataPhotos" style={{backgroundImage: `url(${activity.backGroundPhoto})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 'max-height'}}>
                                    <h1 className = "dataName">{activity.title}</h1>
                                </div>
                                <p className = "dataPar" style={dataParPhotoSN} >{activity.littleSummary}</p>
                            </NavLink>
                    </li>
                ).reverse()}
            </ul>
        )
    }
}

export default Latest;