import React from 'react'
import '../css/index.css';


export default class CV extends React.Component {
  render() {
    return (
      <div>
        <nav> {/* Navigation start */}
          <div className="navi">
            Curriculum Vitae Generator
            </div>
        </nav> {/* Navigation End */}
        <div className="main"> {/* Container start */}
          <div className="form1">
            First form
        <div className="pres">
            </div>
          </div>
          <div className="form2">
            Second form
            <div className="pres">
            </div>
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