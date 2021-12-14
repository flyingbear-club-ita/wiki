import React from "react";

import './youtubeVideo.css'

export default class YouTubeVideo extends React.Component {
    render(){
        return(
            <div className="videoContainer">
                <iframe 
                    src={this.props.src}
                    title={this.props.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        );
    }
}