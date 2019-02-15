import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { AppWrapper } from './styles'

const Home = Loadable({
  loader: () => import('./views/Home'),
  loading: () => <div>loading...</div>
})

export default () => (
  <AppWrapper>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </Router>
  </AppWrapper>
)
