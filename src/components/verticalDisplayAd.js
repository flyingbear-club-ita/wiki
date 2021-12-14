import React from "react";

import './verticalDisplayAd.css';

export default class VerticalDisplayAd extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <div className="verticalDisplayAd" key={Math.random()}>
        <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-3253384067482467"
        data-ad-slot="2898075240"
        data-ad-format="auto"
        data-full-width-responsive="true">
        </ins>
      </div>
    );
  }
}

