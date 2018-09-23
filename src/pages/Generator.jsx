import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

// CSS
import '../css/generator.css'

// Components
import Markdown from '../components/Markdown'
import Footer from '../components/Footer'

let marked = require('marked')

class Generator extends Component {
  state = {
    markdown: ''
  }

  updateMarkdown = function (markdown) {
    this.setState({ markdown })
  }

  render () {
    let { markdown } = this.state

    console.log(markdown)
    return (
      <div>
        <div className="container">
          <div className="cont">
            <div className="card">
              <textarea className="markInput" placeholder="Enter markdown here" value={markdown} onChange = {(event) => this.updateMarkdown(event.target.value) } >
              </textarea>
            </div>
          </div>
          <div className="card">
            <div className="markInput" dangerouslySetInnerHTML = {{ __html: marked(markdown) }}>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Generator
