import React from 'react'
import '../css/index.css';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'


export default class CV extends React.Component {
  render() {
    return (
      <div>
        <nav> {/* Navigation start */}
          <div className="navi">
            Curriculum Vitae Generator
            </div>
        </nav> {/* Navigation End */}
        <div className="main"> {/* Container start */}
          <div className="form1">
            First form
        <div className="pres">
        <Link to="/nop">
        <Button icon labelPosition='right'>
        I take it!
      <Icon name='right arrow' />
    </Button>
    </Link>
            </div>
          </div>
          <div className="form2">
            Second form
            <div className="pres">
            <Link to="/phot">
            <Button icon labelPosition='right'>
      This one look's better!
      <Icon name='right arrow' />
    </Button>
    </Link>
            </div>
        </div>
        </div>
        {/* Container End */}
        <div className="footer">
          Created by <a href="https://github.com/animek66">animek66</a>
        </div>
      </div>
    )
  }
}