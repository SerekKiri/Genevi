import * as React from 'react'
import { Header, Divider, Icon } from 'semantic-ui-react'
import '../css/header.css'

export default class Head extends React.Component {
  render () {
    return (
      <div className="head">
        <Header
          as='h2'
          textAlign="center"
        >
          <Header.Content>React Porfolio Generator</Header.Content>
          <Header.Subheader>Built with <Icon name="heart" /> by <Icon name="users" /></Header.Subheader>
        </Header>
        <Divider />
      </div>
    )
  }
}
