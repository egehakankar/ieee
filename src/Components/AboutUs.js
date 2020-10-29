import React, {Component} from 'react';
import "./CSS/AboutUs.css"
import bannerAboutUs from "./photos/aboutUsB.png"
import { PostDataPhotos } from '../services/PostData';

class AboutUs extends Component {

  constructor() {
    super()
    this.state =
    {
        id: 3,
        data: [],
        mainUrl: "",
    }
    this.getActivity = this.getActivity.bind(this);
}

  componentDidMount() {
    window.scrollTo(0, 0)
    this.getActivity();
  }

  getActivity() {
    let postDataPhoto = { id: this.state.id };
    PostDataPhotos('geBackGround', postDataPhoto).then((result) => {
        let responseJson = result;
        if (responseJson.back) {
            this.setState({ data: responseJson.back });
            this.setState({ mainUrl: this.state.data[0].about })
        }
    });
}

  render() {
    return(
      <div className = "aboutUsC">
        <div className = "aboutPicC">
          <div className = "bannerAbout" style={{ backgroundImage: `url(${this.state.mainUrl})`, backgroundPosition: 'center' }} > 
              <div className = "insideAboutCover">
                  <div className = "aboutUsH">
                    <img className = "aboutUsL" src = {bannerAboutUs} alt = "" />
                  </div>
              </div>
          </div>
      </div>
      <div className = "aboutUsText">
        <div className = "aboutIEEE">
          <div className = "aboutIEEEHC">
              <h1 className = "aboutIEEEH">About IEEE</h1>
          </div>
          <div className = "aboutIEEEP">
            <p>IEEE, pronounced “Eye-triple-E,” stands for the Institute of Electrical and Electronics Engineers. IEEE, an association dedicated to advancing innovation and technological excellence for the benefit of humanity, is the world’s largest technical professional society. It is designed to serve professionals involved in all aspects of the electrical, electronic, and computing fields and related areas of science and technology that underlie modern civilization.
                On 1 January 1963, the AIEE (American Institute of Electrical Engineers) and the IRE (Institute of Radio Engineers) merged to form the Institute of Electrical and Electronics Engineers, or IEEE. At its formation, IEEE had 150,000 members, 140,000 of whom resided in the United States.
                IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.
                IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
          </div>
        </div>
        <div className = "aboutwhyIEEE">
          <div className = "aboutwhyIEEEHC">
              <h1 className = "aboutwhyIEEEH">Why IEEE?</h1>
          </div>
          <div className = "aboutwhyIEEEP">
            <div className = "whyPar"><h4 className = "counter">1)</h4> IEEE is an institution which appeals people who are interested in engineering and positive sciences.</div>
            <div className = "whyPar"><h4 className = "counter">2)</h4> With IEEE, you will enlarge your vision to national and international scales.</div>
            <div className = "whyPar"><h4 className = "counter">3)</h4> By advancing the theories and applications about electronics and technology, IEEE has the accelerating effect on the innovative technologies.</div>
            <div className = "whyPar"><h4 className = "counter">4)</h4> It is an organization that will always support you in both academic and professional careers.</div>
            <div className = "whyPar"><h4 className = "counter">5)</h4> It serves all kinds of technical and professional informations and releases Spectrum, a monthly IEEE magazine for members.</div>
            <div className = "whyPar"><h4 className = "counter">6)</h4> IEEE provides a huge knowledgebase that consist of books and academic papers.</div>
            <div className = "whyPar"><h4 className = "counter">7)</h4> It is a gigantic organization with 426,000 member from 160 countries, including 82,000 student member.</div>
          </div>
        </div>
        <div className = "aboutIEEE">
          <div className = "aboutIEEEHC">
              <h1 className = "aboutIEEEH">About IEEE Turkey</h1>
          </div>
          <div className = "aboutIEEEP">
            <p>IEEE is organized under 10 regions. In 10 regions there are a total number of 334 sections and 2669 student branches. 
              IEEE Turkey Chapter is in Region 8 which contains Europe, Middle East, Africa and Russia and it is the largest region by surface area. 
              IEEE Turkey student members are exclusive in whole world because IEEE Turkey Student Branches is an active community and members always keep in touch with each other. 
              IEEE Turkey Student Branches organizes congresses and meetings annualy in which branches help to solve the issues of each other, offers project ideas and shows off an exemplary cooperation. 
              The media of this communication network is not only congresses and meetings but also we get together with smaller groups or run the debates online.</p>
          </div>
        </div>
        <div className = "aboutIEEE">
          <div className = "aboutIEEEHC">
              <h1 className = "aboutIEEEH">About IEEE Bilkent</h1>
          </div>
          <div className = "aboutIEEEP">
            <p>We are an important part of a community that consist of people from different countries and cities. We have hundreds of friends from 60+ universities in Turkey.
              We improve our academical, technical and social skills all together.
              We know that GPA is not everything – we often hang out together, sometimes with other student branches!
              With numerous activities, we are one of the most active student communities in Bilkent University.
              Because IEEE Bilkent is the first step to expand your horizon.</p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default AboutUs;