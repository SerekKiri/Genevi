import * as React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header'
import { HomeWrapper } from './styles'

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <HomeWrapper>hello</HomeWrapper>
      </>
    )
  }
}

export default withRouter(Home as any)
