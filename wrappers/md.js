import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import ReadNext from '../components/ReadNext'
import { config } from 'config'

import '../pages/assets/css/zenburn.css'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <DocumentTitle title={`${post.title} | ${config.title}`}>
        <div>
          <section className="section">
            <div className="container markdown">
              <article>
                <p className="subtitle is-4">
                  {moment(post.date).format('MMMM D, YYYY') }
                </p>
                <h3 className="title is-2">
                  {post.title}
                </h3>
                <div className="content is-medium" dangerouslySetInnerHTML={{ __html: post.body }}>
                </div>
              </article>
            </div>
          </section>

          <ReadNext post={post} pages={route.pages} />
        </div>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
