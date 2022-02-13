import React from "react";
import ReactPlayer from 'react-player';

import './videoPlayer.css'

export default class ResponsivePlayer extends React.Component {
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url={this.props.src}
            width='100%'
            height='100%'
            controls="true"
          />
        </div>
      )
    }
  }