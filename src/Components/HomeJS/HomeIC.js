import React, { Component } from "react"
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom"
import { PostDataPhotos } from '../../services/PostData';

class HomeIC extends Component {

    constructor() {
        super()
        this.state =
        {
            id: 1,
            data: [],
            mainUrl: "",
        }
        this.getActivity = this.getActivity.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getActivity();
    }

    getActivity() {
        let postDataPhoto = { id: this.state.id };
        PostDataPhotos('geBackGround', postDataPhoto).then((result) => {
            let responseJson = result;
            if (responseJson.back) {
                this.setState({ data: responseJson.back });
                this.setState({mainUrl: this.state.data[0].main})
            }
        });
    }

    render() {
        return (
            <div className="homeIC">
                <div className="banner" style={{ backgroundImage: `url(${this.state.mainUrl})`, backgroundPosition: 'center' }} >
                    <div className="insideCover">
                        <div className="aboutJoin">
                            <img className="logoAbout" src="https://images2.imgbox.com/78/fa/UxJmFR4r_o.png" alt="" />
                            <p className="aboutInfo">IEEE, an association dedicated to advancing innovation and technological excellence for the benefit of humanity, is the world’s largest technical professional society. It is designed to serve professionals involved in all aspects of the electrical, electronic, and computing fields and related areas of science and technology that underlie modern civilization.</p>
                            <Button as={NavLink} to="/aboutUs" className="aboutUsB" variant="outline-light">About Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeIC