import * as React from 'react'

// CSS
import '../css/main.css'
import '../css/generator.css'
import '../css/components.css'
import '../css/page.css'
import '../css/editor.css'

// Components
import Footer from '../components/Footer'
import InputText from '../components/Input'

export default class Generator extends React.Component {
  state = {
    elements: [
      { name: 'text1', category: 'new' },
      { name: 'text2', category: 'new' },
      { name: 'text3', category: 'placed' }
    ]
  }

onDragStart = (ev, id) => {
  console.log('Moved element:', id)
  ev.dataTransfer.setData('id', id)
}

onDragOver = (ev) => {
  ev.preventDefault()
}

onDrop = (ev, cat) => {
  let id = ev.dataTransfer.getData('id')

  let elements = this.state.elements.filter((element) => {
    if (element.name === id) {
      element.category = cat
    }
    return element
  })

  this.setState({
    ...this.state,
    elements
  })
}

render () {
  let elements = {
    new: [],
    placed: []
  }

  this.state.elements.forEach((el) => {
    elements[el.category] = [
      <div key={el.name}
        onDragStart = {(e) => this.onDragStart(e, el.name)}
        draggable
        className="element"
      >
        <InputText></InputText>
      </div>
    ]
  })

  return (
    <div className="cont">
      <ul>
        <li className="componenets">
          <h1>Components</h1>
          <div
            className="elements"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => { this.onDrop(e, 'new') }}
          >
            {elements.new}
          </div>
        </li>
        <li className="page">
          <div
            className="card"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e, 'placed')}
          >
            {elements.placed}
          </div>
        </li>
        <li className="editor">
          <h1>Editor</h1>
          <div className="elements">
            <h1>Coming soon...</h1>
          </div>
        </li>
      </ul>
      <Footer />
    </div>
  )
}
}
