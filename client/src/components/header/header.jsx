import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class header extends Component {


    render() {
        return (
            <nav className="app-header">
                <div className="row">
                    <div className="col-lg-2">
                        <a href="#" className="brand-logo center">

                        </a>
                    </div>
                    <div className="col-lg-7"></div>
                    <div className="col-lg-3">
                        <ul id="nav-mobile" className="float-right header-links" >
                            <li><Link to="/signin">Sign In</Link> </li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default header;