import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import Home from './pages/Home'
import Generator from './pages/Generator'

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/generator" component={Generator} />
        </Switch>
      </BrowserRouter>
    )
  }
}
