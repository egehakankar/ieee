import React, { Component } from 'react';
import Activity from "./ActivityJS/Activities"
import "./CSS/Activities.css"
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-scroll'
import { PostData } from '../services/PostData';
import { PostDataPhotos } from '../services/PostData';

class Technical extends Component {

    constructor() {
        super()
        this.state =
        {
            data: [],
            filter: 'grayscale(1)',
            fontSize: '0',
            id: 6,
            data2: [],
            mainUrl: "",
        }
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.getActivity = this.getActivity.bind(this);
        this.getActivity2 = this.getActivity2.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.getActivity();
        this.getActivity2();
    }

    getActivity() {
        PostData('activitiesSoc').then((result) => {
            let responseJson = result;
            if (responseJson.socData) {
                this.setState({ data: responseJson.socData });
            }
        });
    }

    getActivity2() {
        let postDataPhoto = { id: this.state.id };
        PostDataPhotos('geBackGround', postDataPhoto).then((result) => {
            let responseJson = result;
            if (responseJson.back) {
                this.setState({ data2: responseJson.back });
                this.setState({ mainUrl: this.state.data2[0].social })
            }
        });
    }

    onVisibilityChange = isVisible => {
        this.setState(state => ({
            filter: 'grayscale(0)',
            fontSize: '1.5rem'
        }));
    }

    render() {
        return (
            <div className="activitiesC">
                <VisibilitySensor onChange={this.onVisibilityChange} delayedCall>
                    <div className="activitiesPicC" style={{ filter: this.state.filter }}>
                        <div className="bannerActivities" style={{ backgroundSize: 'cover', backgroundImage: `url(${this.state.mainUrl})`, backgroundPosition: 'center' }} >
                            <div className="insideactivitiesCover">
                                <div className="activitiesH">
                                    Social Activities
                                </div>
                                <div onClick={this.scrollTo} className="showActivities" style={{ fontSize: this.state.fontSize }}>
                                    <Link activeClass="active" className="hakan" to="events" spy={true} smooth={true} duration={500} >Show Activities</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </VisibilitySensor>
                <div className="events">
                    <Activity branch="social" datalar={this.state.data} />
                </div>
            </div>
        )
    }
}

export default Technical;