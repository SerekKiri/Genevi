import React from 'react'
import '../css/index.css';



export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav> {/* Navigation start */}
          <div className="navi">
            <div className="text">
              <h1>CV Creator</h1>
            </div>
          </div>
        </nav> {/* Navigation End */}
        <div className="main">  {/* Container start */}
          <h1>Welcome!</h1>
          <h2>Here you can create your own CV!</h2>
          <div className="reg">
         <h2>Register here:</h2>
         <div class="ui input focus">
         <input placeholder="Nick" type="text"></input>
         </div>
         <br />
         <div class="ui input focus">
         <input placeholder="email.example@gmail.com" type="text"></input>
         </div>
         <br />
         <div class="ui input focus">
         <input placeholder="Password" type="text"></input>
         </div>
         <br />
         <div class="ui input focus">
         <input placeholder="Repat password" type="text"></input>
         </div>
         <div class="but">
         <button class="ui primary button">
          Save
         </button>
         </div>
        </div>

        <div className="log">
         <h2>Login:</h2>
         <div class="ui input focus">
         <input placeholder="Nick" type="text"></input>
         </div>
         <br />
         <div class="ui input focus">
         <input placeholder="Password" type="password"></input>
         </div>
         <br />
         <div class="but">
         <div class="ui animated button" tabindex="0">
          <div class="visible content">Log in</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Container End */}
        <div className="footer">
          CV Creator by animek66
        </div>
      </div>
    )
  }
}
