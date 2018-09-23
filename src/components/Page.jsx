import * as React from 'react'
import { DropTarget } from 'react-dnd'

// CSS
import '../css/page.css'

function collect (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  }
}

class Page extends React.Component {
  render () {
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div className="card">
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(Page)
