import * as React from 'react'
import { Button, Divider, Icon, Container } from 'semantic-ui-react'

// CSS
import '../css/footer.css'

export default class Footer extends React.Component {
  render () {
    return (
      <div className="foot">
        <Container textAlign='center'>
          <Divider></Divider>
          <h4>Authored by <a href="https://github.com/SerekKiri">SerekKiri</a></h4>
          <a href="https://github.com/SerekKiri/ReactPortfolioGenerator">
            <Button animated>
              <Button.Content visible><Icon name="code" />Source Code</Button.Content>
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
