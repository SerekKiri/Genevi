import React from 'react';
import '../css/index.css';
import { Link } from 'react-router-dom';
import { Button, Icon, Input, Image } from 'semantic-ui-react';


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
            (without photo)
        <div className="pres">
              <Input placeholder="Name" /> <Input placeholder="Surname" />
              <br />
              <Input placeholder="City" /> <Input placeholder="Adress" />
              <br />
              <br />
              <Link to="/nop">
                <Button icon labelPosition='right'>
                  I take it!
                  <Icon name='right arrow' />
                </Button>
              </Link>
            </div>
          </div>
          <div className="form2">
            Second form (with photo)
            <div className="pres">
            <div className="av">
                  <Input placeholder="Name" />
                  <Image size="small" className="avatar" src="https://i.imgur.com/6Ywvx4i.png" alt="Your avatar" />
                </div>
                <br />
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