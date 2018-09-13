import React from 'react'
import { Link } from 'react-router-dom'
import '../css/index.css'
import { Input, Button } from 'semantic-ui-react'

export default class Nav extends React.Component {
  render () {
    return (
      <div className="page">
        <nav> {/* Navigation start */}
          <div className="navi">
            Curriculum Vitae Generator
          </div>
        </nav> {/* Navigation End */}
        <div className="main">  {/* Container start */}
          <div className="register">
            <h2>Register here:</h2>
            <div className="ui input focus">
              <Input placeholder="Nick" type="text" />
            </div>
            <div className="ui input focus">
              <Input placeholder="example@email.com" type="text" />
            </div>
            <div className="ui input focus">
              <Input placeholder="Password" type="text" />
            </div>
            <div className="ui input focus">
              <Input placeholder="Repat password" type="text" />
            </div>
            <Button>
                Save
            </Button>
          </div>

          <div className="log">
            <h2>Login:</h2>
            <div className="ui input focus">
              <Input placeholder="Nick" type="text" />
            </div>
            <br />
            <div className="ui input focus">
              <Input placeholder="Password" type="password" />
            </div>
            <br />
            <Link to="/CV">
              <div className="ui animated button" tabIndex="0">
                <div className="visible content">Log in</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* Container End */}
        <div className="footer">
          Created by <a href="https://github.com/animek66">animek66</a>
        </div>
      </div>
    )
  }
}
