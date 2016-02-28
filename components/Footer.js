import React from 'react'
import { config } from 'config'

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content is-text-centered">
            <p>
              <strong>
                {config.title}
              </strong> by {config.author}.
              The website content is licensed <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>
            </p>
            <p>
              <strong>
                <a href="https://github.com/gatsbyjs/gatsby/">GatsbyJS</a>
              </strong> by Kyle Mathews.
              The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
            <p>
              <strong>
                <a href="https://github.com/jgthms/bulma">Bulma</a>
              </strong> by Jeremy Thomas.
              The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
            <div id="social">
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
}

export default Footer
