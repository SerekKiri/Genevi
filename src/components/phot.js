import React from 'react'
import '../css/index.css';
import { Input } from 'semantic-ui-react';


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
                <Input placeholder="name" />
                </div>
                {/* Container End */}
                <div className="footer">
                    Created by <a href="https://github.com/animek66">animek66</a>
                </div>
            </div>
        )
    }
}