import React, { Component } from "react"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { PostDataPhotos } from '../../services/PostData';

class MemberCount extends Component {
    constructor() {
        super()
        this.state =
        {
            didViewCountUp: false,
            id: 2,
            data: [],
            mainUrl: "",
        }
        this.onVisibilityChange = this.onVisibilityChange.bind(this);
        this.getActivity = this.getActivity.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getActivity();
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }

    getActivity() {
        let postDataPhoto = { id: this.state.id };
        PostDataPhotos('geBackGround', postDataPhoto).then((result) => {
            let responseJson = result;
            if (responseJson.back) {
                this.setState({ data: responseJson.back });
                this.setState({ mainUrl: this.state.data[0].counterP })
            }
        });
    }

    render() {
        return (
            <div className="memberCount" >
                <div className="banner" style={{ backgroundImage: `url(${this.state.mainUrl})`, width: '100%', height: 'auto', backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    <div className="memberContainer">
                        <div className="memberHeader">
                            <h1 className="memberHeaderS">Bonding For Years!</h1>
                        </div>
                        <div className="insideMemberCount">
                            <div className="memberCountH">
                                <h1 className="memberCountHS">Active Member Count: </h1>
                            </div>
                            <div className="memberCountNum">
                                <VisibilitySensor onChange={this.onVisibilityChange} delayedCall>
                                    <CountUp className="memberCountNumH" start={0} end={this.state.didViewCountUp ? 95 : 0} duration={3} />
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemberCount