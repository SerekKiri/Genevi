import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import './index.css';

  class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    
    render() {
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
                      <li><TextField helperText="Username" floatingLabelText="Fixed Floating Label Text" floatingLabelFixed={true} /><br /></li>
                      <li><TextField helperText="Password" floatingLabelText="Password" type="password" /><br /></li>
                      <li><TextField helperText="Reapeat password" floatingLabelText="Password" type="password" /><br /></li>
                      <li><TextField helperText="Your email" floatingLabelText="Password" /><br /></li>
                      <Button raised color="primary" onclick="./civ">Register</Button>
                      </ul>
                  <ul>
                    <li>Log in:</li>
                    <li><TextField helperText="Username" floatingLabelText="Fixed Floating Label Text" floatingLabelFixed={true} /><br /></li>
                    <li><TextField helperText="Password" hintText="XD" floatingLabelText="Password" type="password"/><br /></li>
                    <Button raised color="primary" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </Button>
                    </ul>
                    <div className="info">
                    <h4>Check my GitHub!</h4>
                    <Button className="but" raised color="accent">GitHub</Button>
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

render(<Nav />,document.getElementById('root'));


