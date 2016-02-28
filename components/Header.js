import React from 'react'
import { Link } from 'react-router'
import { link } from 'gatsby-helpers'
import { config } from 'config'

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div className="container">
          <div className="header-left">
            <Link to={link('/')}>
              <span className="header-item">
                <img src="/assets/img/logo.png" />
              </span>
            </Link>
          </div>
          <span id="header-toggle" className="header-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div id="header-menu" className="header-right header-menu">
            <span className="header-item">
              <Link to={link('/')} activeClassName="is-active">Home</Link>
            </span>

            <span className="header-item">
              {(() => {
                if (config.github) {
                  return (
                    <a className="button is-info is-outlined is-inverted" href={config.github}>
                      <i className="fa fa-github"></i>
                      GitHub
                    </a>
                  )
                }
              })()}
              {(() => {
                if (config.twitter) {
                  return (
                    <a className="button is-info is-outlined is-inverted" href={config.twitter}>
                      <span className="fa fa-twitter"></span>
                      Twitter
                    </a>
                  )
                }
              })()}
            </span>

          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
}

export default Header
