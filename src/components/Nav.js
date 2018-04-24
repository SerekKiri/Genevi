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
        </div>

        <div className="log">
         <h2>Login:</h2>  
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
