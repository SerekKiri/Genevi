import * as React from 'react'

// CSS
import '../css/markdown.css'

let marked = require('marked')

export default class Markdown extends React.Component {
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
      <div className="cont">
        <div id="pdf" className="card">
          <textarea className="markInput" placeholder="Enter markdown here" value={markdown} onChange = {(event) => this.updateMarkdown(event.target.value) } >
          </textarea>
          <div dangerouslySetInnerHTML = {{ __html: marked(markdown) }}></div>
        </div>
      </div>
    )
  }
}
