import React from 'react'
import '../css/index.css';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default class phot extends React.Component {
    render() {
        return (
            <div>
                <nav> {/* Navigation start */}
                    <div className="navi">
                        Curriculum Vitae Generator
            </div>
                </nav> {/* Navigation End */}
                <div className="main"> {/* Container start */}
                <div className="first">
                <Link to="/CV">
                <Button> <Icon name='left arrow' /> Go back </Button>
                </Link>
                <div className="for1">
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