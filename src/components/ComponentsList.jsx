import * as React from 'react'
import { Input } from 'semantic-ui-react'

// CSS
import '../css/main.css'
import '../css/components.css'

export default class ConponentsList extends React.Component {
  render () {
    return (
      <div className="cont">
        <h1>Components</h1>
        <div className="elements">
          <div className="element"><Input disabled placeholder='Name' /></div>
          <div className="element"><Input disabled placeholder='Surname' /></div>
        </div>
      </div>
    )
  }
}
