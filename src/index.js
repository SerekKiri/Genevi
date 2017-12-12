import React from 'react'
import { render } from 'react-dom'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import './css/index.css'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import Nav from './components/Nav'
import Bazar from './components/Bazar'

const Foo = () => (<Redirect to="/baz" />)

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Nav} />
      <Route exact path="/foo" component={Foo} />
      <Route exact path="/baz" component={Bazar} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
