import React, { Component } from 'react';
import "./CSS/Team.css"
import TeamOne from "./TeamJS/TeamOne.js"
import bannerTeam from "./photos/teamI.png"
import { PostDataPhotos, PostDataTeam } from '../services/PostData';

class Team extends Component {

  constructor() {
    super()
    this.state =
    {
      id: 4,
      data: [],
      mainUrl: "",
      data2: [],
      team1: [],
      team2: [],
      team3: [],
      team4: [],
    }
    this.getActivity = this.getActivity.bind(this);
    this.getActivity2 = this.getActivity2.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.getActivity();
    this.getActivity2();
  }

  getActivity() {
    let postDataPhoto = { id: this.state.id };
    PostDataPhotos('geBackGround', postDataPhoto).then((result) => {
      let responseJson = result;
      if (responseJson.back) {
        this.setState({ data: responseJson.back });
        this.setState({ mainUrl: this.state.data[0].team })
      }
    });
  }
  getActivity2() {
    PostDataTeam('getTeam').then((result) => {
      let responseJson = result;
      if (responseJson.inff) {
        this.setState({ data2: responseJson.inff });
        this.setState({team1: this.state.data2[0]})
        this.setState({team2: this.state.data2[1]})
        this.setState({team3: this.state.data2[2]})
        this.setState({team4: this.state.data2[3]})
      }
    });
  }

  render() {
    return (
      <div>
        <div className="teamPicC">
          <div className="bannerTeam" style={{ backgroundImage: `url(${this.state.mainUrl})`, backgroundPosition: 'center' }} >
            <div className="insideTeamCover">
              <div className="teamH">
                <img className="teamL" src={bannerTeam} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="teamCC">
          <div className="teamC">
            <div className="teamCH">
              <h1 className="teamCHH">Our Team</h1>
            </div>
            <div>
              <div className="teamH">
                <h1 className="teamHH">Executive Committee</h1>
              </div>
              <div className="teamAll">
                <div className="teamP">
                  <TeamOne namep="Oguz" photoName={this.state.team1.techVice} nameF={this.state.team4.techVice} roleF={this.state.team2.techVice} emailF={this.state.team3.techVice} />
                  <TeamOne namep="Selin" photoName={this.state.team1.President} nameF={this.state.team4.President} roleF={this.state.team2.President} emailF={this.state.team3.President} />
                  <TeamOne namep="Begum" photoName={this.state.team1.socVice} nameF={this.state.team4.socVice} roleF={this.state.team2.socVice} emailF={this.state.team3.socVice} />
                </div>
                <div className="teamP">
                  <TeamOne namep="Emre" photoName={this.state.team1.Secretary} nameF={this.state.team4.Secretary} roleF={this.state.team2.Secretary} emailF={this.state.team3.Secretary} />
                  <TeamOne namep="Alp" photoName={this.state.team1.Treasurer} nameF={this.state.team4.Treasurer} roleF={this.state.team2.Treasurer} emailF={this.state.team3.Treasurer} />
                </div>
              </div>
              <div className="teamH">
                <h1 className="teamHH">Operating Committee</h1>
              </div>
              <div className="teamAll">
                <div className="teamP">
                  <TeamOne namep="Hakan" photoName={this.state.team1.Webmaster} nameF={this.state.team4.Webmaster} roleF={this.state.team2.Webmaster} emailF={this.state.team3.Webmaster} />
                  <TeamOne namep="Utku" photoName={this.state.team1.Ras1} nameF={this.state.team4.Ras1} roleF={this.state.team2.Ras1} emailF={this.state.team3.Ras1} />
                  <TeamOne namep="Berker" photoName={this.state.team1.Ras2} nameF={this.state.team4.Ras2} roleF={this.state.team2.Ras2} emailF={this.state.team3.Ras2} />
                </div>
                <div className="teamP">
                  <TeamOne namep="Ekrem" photoName={this.state.team1.Cs} nameF={this.state.team4.Cs} roleF={this.state.team2.Cs} emailF={this.state.team3.Cs} />
                  <TeamOne namep="Nisa" photoName={this.state.team1.Ud} nameF={this.state.team4.Ud} roleF={this.state.team2.Ud} emailF={this.state.team3.Ud} />
                  <TeamOne namep="Nilhan" photoName={this.state.team1.Wie} nameF={this.state.team4.Wie} roleF={this.state.team2.Wie} emailF={this.state.team3.Wie} />
                </div>
                <div className="teamP">
                  <TeamOne namep="Talha" photoName={this.state.team1.Ias} nameF={this.state.team4.Ias} roleF={this.state.team2.Ias} emailF={this.state.team3.Ias} />
                  <TeamOne namep="Dora" photoName={this.state.team1.Cas} nameF={this.state.team4.Cas} roleF={this.state.team2.Cas} emailF={this.state.team3.Cas} />
                  <TeamOne namep="Ilter" photoName={this.state.team1.Graph1} nameF={this.state.team4.Graph1} roleF={this.state.team2.Graph1} emailF={this.state.team3.Graph1} />
                </div>
                <div className="teamP">
                  <TeamOne namep="Sule" photoName={this.state.team1.Graph2} nameF={this.state.team4.Graph2} roleF={this.state.team2.Graph2} emailF={this.state.team3.Graph2} />
                  <TeamOne namep="Cagdas" photoName={this.state.team1.Pr1} nameF={this.state.team4.Pr1} roleF={this.state.team2.Pr1} emailF={this.state.team3.Pr1} />
                  <TeamOne namep="Burak" photoName={this.state.team1.Pr2} nameF={this.state.team4.Pr2} roleF={this.state.team2.Pr2} emailF={this.state.team3.Pr2} />
                </div>
                <div className="teamP">
                  <TeamOne namep="Bulent" photoName={this.state.team1.Tac} nameF={this.state.team4.Tac} roleF={this.state.team2.Tac} emailF={this.state.team3.Tac} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Team;