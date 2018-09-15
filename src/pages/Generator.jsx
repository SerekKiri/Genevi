import * as React from 'react'
// import { Segment } from 'semantic-ui-react'

// CSS
import '../css/main.css'
import '../css/generator.css'

// Components
import ComponentsList from '../components/ComponentsList'
import Page from '../components/Page'
import Editor from '../components/Editor'
import Footer from '../components/Footer'

export default class Generator extends React.Component {
  render () {
    return (
      <div className="cont">
        <ul>
          <li className="componenets"> <ComponentsList /> </li>
          <li className="page"> <Page />  </li>
          <li className="editor"> <Editor />  </li>
        </ul>
        <Footer />
      </div>
    )
  }
}
