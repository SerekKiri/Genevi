import React from 'react'
import { render } from 'react-dom'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import '../css/index.css'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

export default class Bazar extends React.Component {
  constructor (props) {
    super(props)
    this.props = {
      click: event => console.log(event)
    }
  }
  render () {
    return (
      <div>
        <Link to="/">
          <Button className="homebtn" onClick={this.props.click} raised color="accent">Home</Button>
        </Link>
      </div>
    )
  }
}
