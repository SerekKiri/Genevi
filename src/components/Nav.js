import React from 'react'
import { render } from 'react-dom'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import '../css/index.css'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

export default class Nav extends React.Component {
  render () {
    return (
      <div>
        <nav> {/* Navigation start */}
          <div className="navi">
            <div className="text">
              <h1>CV Creator</h1>
            </div>
            <div className="section">
            </div>
          </div>
        </nav> {/* Navigation End */}
        <div className="main">  {/* Container start */}
          <h1>Welcome!</h1>
          <h2>Here you can create your own CV!</h2>
          <h3>Just register!</h3>
          <ul>
            <li>Register:</li>
            <li><TextField helperText="Username" /><br /></li>
            <li><TextField helperText="Password" type="password" /><br /></li>
            <li><TextField helperText="Reapeat password" type="password" /><br /></li>
            <li><TextField helperText="Your email" /><br /></li>
            <Button raised color="primary">Register</Button>
          </ul>
          <ul>
            <li>Log in:</li>
            <li><TextField helperText="Username" /><br /></li>
            <li><TextField helperText="Password" type="password"/><br /></li>
            <Link to="/foo">
              <Button raised color="primary">Login</Button>
            </Link>
          </ul>
          <div className="info">
            <h4>Check my GitHub!</h4>
            <a href="https://github.com/animek66">
              <Button className="but" raised color="accent">GitHub</Button>
            </a>
          </div>
        </div>
        {/* Container End */}
        <div className="footer">
                  CV Creator by Kacper Potyrała &reg;
        </div>
      </div>
    )
  }
}
