import * as React from 'react'
import { Button, Divider, Icon, Container } from 'semantic-ui-react'

export default class Footer extends React.Component {
  render () {
    return (
      <div>
        <Container textAlign='center'>
          <Divider></Divider>
          <h4 >Authored by <a href="https://github.com/SerekKiri">SerekKiri</a> and <a href="https://github.com/xdk78">xdk78</a></h4>
          <a href="https://github.com/SerekKiri/ReactPortfolioGenerator">
            <Button animated >
              <Button.Content visible>Code</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </a>
        </Container>
      </div>
    )
  }
}
