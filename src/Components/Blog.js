import React, { Component } from 'react';
import { PostData } from '../services/PostData';
import BlogAc from "./ActivityJS/BlogAc"
import "./CSS/Blog.css"
import { PostDataPhotos } from '../services/PostData';

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      filter: 'grayscale(1)',
      id: 7,
      data2: [],
      mainUrl: "",
    };
    this.getActivity = this.getActivity.bind(this);
    this.getActivity2 = this.getActivity2.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.getActivity();
    this.getActivity2();
  }

  getActivity() {
    PostData('activitiesTech').then((result) => {
      let responseJson = result;
      if (responseJson.techData) {
        this.setState({ data: responseJson.techData });
      }
    });
  }

  getActivity2() {
    let postDataPhoto = { id: this.state.id };
    PostDataPhotos('geBackGround', postDataPhoto).then((result) => {
      let responseJson = result;
      if (responseJson.back) {
        this.setState({ data2: responseJson.back });
        this.setState({ mainUrl: this.state.data2[0].blog })
      }
    });
  }

  render() {
    return (
      <div className="activitiesC">
        <div className="activitiesPicC" style={{ filter: this.state.filter }}>
          <div className="bannerActivities" style={{ backgroundSize: 'cover', backgroundImage: `url(${this.state.mainUrl})`, backgroundPosition: 'center' }}>
            <div className="insideactivitiesCover">
              <div className="activitiesH">
                Blogs
                </div>
            </div>
          </div>
        </div>
        <div className="events">
          <BlogAc branch='technical' datalar={this.state.data} />
        </div>
      </div>
    )
  }
}

export default Blog;