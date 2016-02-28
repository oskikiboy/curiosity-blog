import React from 'react'
import moment from 'moment'
import access from 'safe-access'
import { Link } from 'react-router'
import { link } from 'gatsby-helpers'
import { config } from 'config'
import ellipsis from 'html-ellipsis'

class PageLink extends React.Component {
  render () {
    const { page } = this.props
    const title = access(page, 'data.title') || page.path
    const body = access(page, 'data.body')
    const date = access(page, 'data.date')

    return (
      <div>
        <h3 className="title is-3">
          <Link to={link(page.path)}>{title}</Link>
        </h3>

        <article className="media media-post">
          <figure className="media-left">
            <p className="image is-24x24">
              <img src="/assets/img/author.png" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{config.author} </strong>
                <small className="media-date">| {moment(date).format('MMMM DD, YYYY')}</small>
              </p>
            </div>
          </div>
        </article>
        <article className="media media-post">
          <div className="media-content">
            <div className="content">
              <p dangerouslySetInnerHTML={{ __html: ellipsis(body, 142) }}>
              </p>
            </div>
            <div>
              <Link to={link(page.path)}>Read More</Link>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

PageLink.propTypes = {
  page: React.PropTypes.object,
}

export default PageLink
