import React from 'react'
import { render } from 'react-dom'
import './css/index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import CV from './components/CV'
import nop from './components/nop'
import phot from './components/phot'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Nav} />
      <Route exact path="/cv" component={CV} />
      <Route exact path="/nop" component={nop} />
      <Route exact path="/phot" component={phot} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
