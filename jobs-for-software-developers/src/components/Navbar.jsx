import React from 'react'
import '../styles/Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AllJobs from './AllJobs';
import MySavedJobs from './MySavedJobs';
import SignOut from './SignOut';
import UserName from './UserName';
import Logo from './Logo';

const Navbar = () => {
    return (
        <Router>
            <nav>
                <Link className="link" to="/">My Pretty Logo</Link>
                <ul className="nav-links">
                    <li>
                        <Link className="link" to="/alljobs">All jobs</Link>
                    </li>
                    <li>
                        <Link className="link" to="/mysavedjobs">My Saved jobs</Link>
                    </li>
                    <li>
                        Sign Out
                    </li>
                    <li>
                        User Name
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Logo} />
                <Route exact path='/alljobs' component={AllJobs} />
                <Route exact path='/mysavedjobs' component={MySavedJobs} />
            </Switch>
        </Router>
    );
}

export default Navbar;