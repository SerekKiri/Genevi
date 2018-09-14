import * as React from 'react'
import { Header } from 'semantic-ui-react'
import '../css/header.css'

export default class Head extends React.Component {
  render () {
    return (
      <div className="head">
        <Header
          as='h2'
          content='React Porfolio Generator'
          textAlign="center"
          padding-top={2}
        >
        </Header>
      </div>
    )
  }
}
