import React from 'react'
import { Link } from 'react-router'
import { link } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    const { readNext } = post
    let nextPost
    if (readNext) {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext)
      )
    }
    if (!nextPost) {
      return React.createElement('noscript', null)
    } else {
      nextPost = find(pages, (page) =>
        includes(page.path, readNext.slice(1, -1))
      )
      // Create pruned version of the body.
      const html = nextPost.data.body
      const body = prune(html.replace(/<[^>]*>/g, ''), 200)

      return (
        <section className="hero is-primary is-bold">
          <div className="hero-content">
            <div className="container">
              <p>
                <Link
                  className="button is-info is-outlined is-inverted"
                  to={{
                    pathname: link(nextPost.path),
                    query: {
                      readNext: true,
                    },
                  }}
                >
                  Read this next
                </Link>
              </p>
              <h5 className="title is-4">
                <Link
                  to={{
                    pathname: link(nextPost.path),
                    query: {
                      readNext: true,
                    },
                  }}
                >
                  {nextPost.data.title}
                </Link>
              </h5>
              <p>
                {body}
              </p>
            </div>
          </div>
        </section>
      )
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array,
}

export default ReadNext
