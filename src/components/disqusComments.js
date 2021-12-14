import React from "react"
import Disqus from "disqus-react"

export default class DisqusComments extends React.Component {
  render() {
    const disqusShortname = "flyingbearghost-com"
    const disqusConfig = {
      url: "https://flyingbearghost.com",
      identifier: "article-id",
      title: "Title of Your Article"
    }

    return (
      <div className="comments">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}