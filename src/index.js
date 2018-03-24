import React from 'react'
import { render } from 'react-dom'
import './css/index.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'


render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Nav} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
