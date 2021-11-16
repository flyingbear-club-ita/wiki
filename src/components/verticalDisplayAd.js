import React from "react";

export default class VerticalDisplayAd extends React.Component {
  componentDidMount () {
    const installGoogleAds = () => {
      const elem = document.createElement("script");
      elem.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      elem.async = true;
      elem.defer = true;
      document.body.insertBefore(elem, document.body.firstChild);
    }
    installGoogleAds();
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
      <ins className="adsbygoogle"
      style={{display:"block"}}
      data-ad-client="ca-pub-3253384067482467"
      data-ad-slot="2898075240"
      data-ad-format="auto"
      data-full-width-responsive="true">
      </ins>
    );
  }
}

