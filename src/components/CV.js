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
          <div className="form">
          
          <div className="ui input focus">
         <input placeholder="Name" type="text"></input>
         </div>
         <div className="ui input focus">
         <input placeholder="Surname" type="text"></input>
         </div>
         <div className="img">
         <div className="ui card">
         <div className="content">
        <a className="header">Put your image here</a>
        </div>
        <input type="file" accept="image/*"></input>
        </div>
        </div>
          </div>
          </div>
          {/* Container End */}
        </div>
      )
    }
  }