import React from 'react'
import '../styles/Navbar.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AllJobs from './AllJobs';
import MySavedJobs from './MySavedJobs';
import SignOut from './SignOut';
import UserName from './UserName';

const Navbar = () => {
    return (
        <Router>
            <nav>
                <h3>My pretty Logo</h3>
                <ul className="nav-links">
                    <li><AllJobs /></li>
                    <li><MySavedJobs /></li>
                    <li><SignOut /></li>
                    <li><UserName /></li>
                </ul>
            </nav>
        </Router>
    );
}

export default Navbar;