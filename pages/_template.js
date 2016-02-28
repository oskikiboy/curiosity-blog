import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { config } from 'config'

import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/styles.css'

class Template extends React.Component {
  render () {
    const { location, children } = this.props

    return (
      <div>
        <section className="hero is-primary is-left is-bold">
          <div className="hero-header">
            <Header location={location} />
          </div>

          <div className="hero-content">
            <div className="container">
              <h1 className="title">
                {config.title}
              </h1>
              <h2 className="subtitle">
                {config.subtitle}
              </h2>
            </div>
          </div>
        </section>

        <section>
          {children}
        </section>

        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
