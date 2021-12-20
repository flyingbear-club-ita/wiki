import React from "react"
import Disqus from "disqus-react"

export default class DisqusComments extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    const disqusShortname = "flyingbearghost-com"
    const disqusConfig = {
      url: `https://flyingbearghost.com${this.props.slug}`,
      identifier: this.props.articleId,
      title: this.props.articleTitle
    }

    return (
      <div className="comments" key={Math.random()}>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}