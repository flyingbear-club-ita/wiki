import React from "react";

export default class DisplayAd extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <div className="displayAd" key={Math.random()}>
        <ins className='adsbygoogle'
          key={Math.random()}
          style={{ display: 'block', textAlign:"center" }}
          data-ad-client='ca-pub-3253384067482467'
          data-ad-slot='5610548275'
          data-ad-format='auto' />
        </div>
    );
  }
}

