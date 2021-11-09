import React from "react";
import "../css/facebookLink.css";

export default class FacebookLink extends React.Component {
    constructor(props){
        super(props);
        this.link = props.link;
    }
    render(){
        return(
            <div id="facebookBanner">
                <img id="facebookBannerIcon" src="/resources/facebookIcon.svg"/>
                <p id="facebookBannerParagraph"><a id="facebookLink" href={this.link} target="_blank"> Segui la conversazione su Facebook!</a></p>
            </div>
        )
    }
}

