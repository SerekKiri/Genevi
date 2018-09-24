import React, { Component } from 'react'

// CSS
import '../css/generator.css'
import { Button, Icon } from 'semantic-ui-react'

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
      <div className="generator">
        <div className="contain">
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
        <Button animated color="blue">
          <Button.Content visible><Icon name="save" />Save</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
        <Footer />
      </div>
    )
  }
}

export default Generator
