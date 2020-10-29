import React, {Component} from "react"
import Latest from "./Latest.js"
import { PostData } from '../../services/PostData';

class LatestEvent extends Component {

    constructor()
    {
        super()
        this.state = 
        {
            techActivities: [],
            socialActivities: [],
        }
    }

    componentDidMount() {
        PostData('activitiesTech').then((result) => {
            let responseJson = result;
            if (responseJson.techData) {
              this.setState({ techActivities: responseJson.techData });
            }
          });
          PostData('activitiesSoc').then((result) => {
            let responseJson = result;
            if (responseJson.socData) {
              this.setState({ socialActivities: responseJson.socData });
            }
          });
    }

    render() {
        return(
            <div className = "latestEvent">
                <div className = "latestContainer">
                    <div className = "latestHeader">
                        <h1>Latest Events</h1>
                    </div>
                        <Latest techData = {this.state.techActivities} socialData = {this.state.socialActivities}/>
                </div>
            </div>
        )
    }
}

export default LatestEvent;