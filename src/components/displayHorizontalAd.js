// import React from "react";

// export default function DisplayAd() {
//     return(
//         <div className="displayAd">
//             <ins class="adsbygoogle"
//                 style={{display:"block"}}
//                 data-ad-client="ca-pub-3253384067482467"
//                 data-ad-slot="5610548275"
//                 data-ad-format="auto"
//                 data-full-width-responsive="true">
//             </ins>
//             <script src="articleAdPush.js"></script>
//         </div>
//     );
// }


import React from "react";

export default class DisplayHorizontalAd extends React.Component {
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
            style={{"display:block"}}
            data-ad-client="ca-pub-3253384067482467"
            data-ad-slot="4327062206"
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    );
  }
}

