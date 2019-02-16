import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppWrapper } from './styles'
import Home from './views/Home'

const App = () => (
  <AppWrapper>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </Router>
  </AppWrapper>
)

export default App
