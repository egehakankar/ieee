import React, {Component} from "react"
import MailI from "../photos/emailI.png"

class TeamOne extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            person: "",
            boxShadow: "",
        }
        this.personHover = this.personHover.bind(this)
        this.personNoHover = this.personNoHover.bind(this)
    }

    personHover(kral)
    {
        const namepO = kral.currentTarget.getAttribute('namep');
        this.setState(state => ({
            person: namepO,
            boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.7)",
        }));
    }
    personNoHover(kral)
    {
        this.setState(state => ({
            person: "",
            boxShadow: ""
        }));
    }
    render(){
    return(
        <div className = "teamOne" namep = {this.props.namep} onMouseEnter={this.personHover} onMouseLeave={this.personNoHover}>
            <img className = "teamOnePic" src = {this.props.photoName} alt = ""  style = {{boxShadow: this.state.boxShadow}}/>
            <div className = "teamOneName">{this.props.nameF}</div>
            <div className = "teamOneRole">{this.props.roleF}</div>
            <div className = "emailC" style = {{display: this.state.person === this.props.namep? 'flex' : 'none'}}>
                <img className = "mailI" src = {MailI} alt = "" />
                <div className = "emails" >{this.props.emailF}</div>
            </div>
        </div>
        )
    }
}

export default TeamOne