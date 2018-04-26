import React from 'react'
import { Link } from 'react-router-dom';
import '../css/index.css';



export default class Nav extends React.Component {
  render() {
    return (
      <div className="page">
        <nav> {/* Navigation start */}
          <div className="navi">
          Curriculum Vitae Generator
          </div>
        </nav> {/* Navigation End */}
        <div className="main">  {/* Container start */}
          <div className="reg">
         <h2>Register here:</h2>
         <div className="ui input focus">
         <input placeholder="Nick" type="text"></input>
         </div>
         <br />
         <div className="ui input focus">
         <input placeholder="example@email.com" type="text"></input>
         </div>
         <br />
         <div className="ui input focus">
         <input placeholder="Password" type="text"></input>
         </div>
         <br />
         <div className="ui input focus">
         <input placeholder="Repat password" type="text"></input>
         </div>
         <div className="but">
         <button className="ui button">
          Save
         </button>
         </div>
        </div>

        <div className="log">
         <h2>Login:</h2>
         <div className="ui input focus">
         <input placeholder="Nick" type="text"></input>
         </div>
         <br />
         <div className="ui input focus">
         <input placeholder="Password" type="password"></input>
         </div>
         <br />
         <div className="but">
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
        </div>
        {/* Container End */}
      </div>
    )
  }
}
