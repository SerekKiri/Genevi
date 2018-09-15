import * as React from 'react'
import { Container, Header, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../css/preview.css'

export default class Prev extends React.Component {
  render () {
    return (
      <div className="cont">
        <Container>
          <Header as="h2">
            <p>
              Here you can create your own  Curiculum Vitae
            </p>
          </Header>
          <p>
            <img src="https://craft-cv.com/image/en/65/online-cv-maker.png" alt="example"></img>
          </p>
          <Link to="/generator">
            <Button animated size="big">
              <Button.Content visible>Let's try</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Link>
        </Container>
      </div>
    )
  }
}
