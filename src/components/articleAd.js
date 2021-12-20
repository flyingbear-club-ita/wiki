import React from "react";

export default class ArticleAd extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          key={Math.random()}
          style={{ display: 'block', textAlign:"center" }}
          data-ad-client='ca-pub-3253384067482467'
          data-ad-slot='5484842616'
          data-ad-format='auto' />
    );
  }
}