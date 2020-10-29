import React from "react"
import { SocialIcon } from 'react-social-icons';


function SocialD(props)
{   
    return(
        <div className = "socialD"> 
            <div className = "social">
                <div className="columnSocial">
                    <img className = "socialIeee" src="https://images2.imgbox.com/64/bb/bkAosJh9_o.png" alt="/"/>
                </div>
                <div className="columnSocial descSoc">
                    <h3>Be a part of our team!</h3>
                </div>
                <div className="columnSocial">
                    <h4>Follow Us:</h4>
                    <SocialIcon className = "socialIcons" url="http://facebook.com/BilkentIEEE" />
                    <SocialIcon className = "socialIcons" url="http://twitter.com/bilkentieee" />
                    <SocialIcon className = "socialIcons" url="https://www.linkedin.com/company/bilkent-ieee-renci-kolu/" />
                    <SocialIcon className = "socialIcons" url="https://www.instagram.com/ieeebilkent" />
                </div>
            </div>
        </div>
    )
}

export default SocialD