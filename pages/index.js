import React from 'react'
import sortBy from 'lodash/sortBy'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'
import { config } from 'config'
import PageLink from '../components/PageLink'

class BlogIndex extends React.Component {
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()

    return (
      <DocumentTitle title={config.title}>
        <section className="section">
          <div className="container">
            {sortedPages.map((page) => {
              if (access(page, 'file.ext') === 'md') {
                return (
                  <PageLink key={page.path} page={page} />
                )
              }
            })}
          </div>
        </section>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
