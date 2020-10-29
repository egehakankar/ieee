import React, { Component } from 'react';
import "./CSS/Event.css"
import dateI from "./photos/eventIcon/date.png"
import { PostDataId } from '../services/PostData';

class SocialEvent extends Component {

  constructor() {
    super()
    this.state =
    {
      data: [],
    }
    this.getActivity = this.getActivity.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getActivity();
  }

  getActivity() {
    let postData = { id: this.props.match.params.eventTitle };

    PostDataId('getSocId', postData).then((result) => {

      let responseJson = result;

      if (responseJson.socData) {
        this.setState({ data: responseJson.socData });
      }
    });
  }

  render() {
    let userFeed = this.state.data.map(function (data, index) {
      return (
        <div className="eventC" key={data.id}>
          <div className="eventPicC">
            <div className="bannerEvent" style={{ backgroundImage: `url(${data.backGroundPhoto})`, backgroundPosition: 'center' }}>
              <div className="insideEventCover">
                <div className="eventH">
                  <div>{data.title}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventText">
            <div className="eventDate">
              <img className="dateI" src={dateI} alt="" />
              {data.dateT}
            </div>
            <div className="eventAbout">
              <div className="eventAboutHC">
                <h1 className="eventAboutHH">About {data.title}</h1>
              </div>
              <div className="eventColumn">
                <div className="eventP">
                  <p>{data.smallDescription}
                  </p>
                  <p>{data.longDescription}
                  </p>
                </div>
                <div className="eventPhotos">
                  <img className="eventPhoto" src={data.firstPhoto} alt="" />
                  <img className="eventPhoto" src={data.secondPhoto} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }, this);
    return (
      <div>
        {userFeed}
      </div>
    );
  }
}

export default SocialEvent;