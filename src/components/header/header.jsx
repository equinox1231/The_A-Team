import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css'

class header extends Component {


    render() {
        return (
            <nav className="app-header">
                <div className="row">
                    <div className="col s2 m2">
                        <a href="#" className="brand-logo center"></a>
                    </div>
                    <div className="col s8 m6"></div>
                    <div className="col s2 m4">
                        <ul id="nav-mobile" className="right-align" >
                            <li><Link to="/signIn">Sign In</Link> </li>
                            <li><Link to="/signUp">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default header;