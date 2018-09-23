import * as React from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

// CSS
import '../css/main.css'
import '../css/generator.css'
import '../css/components.css'
import '../css/editor.css'

// Components
import Footer from '../components/Footer'
import Page from '../components/Page'
import Item from '../components/Item'

class Generator extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Name' },
      { id: 2, name: 'Surname' }
    ]
  }

  deleteItem = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  render () {
    return (
      <div className="cont">
        <ul>
          <li className="componenets">
            <h1>Components</h1>
            <div
              className="elements"
            >
              {this.state.items.map((item, index) => (
                <Item
                  key={item.id}
                  item={item}
                  handleDrop={ (id) => this.deleteItem(id)}
                />
              ))}
            </div>
          </li>
          <li className="page">
            <Page/>
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

export default DragDropContext(HTML5Backend)(Generator)
