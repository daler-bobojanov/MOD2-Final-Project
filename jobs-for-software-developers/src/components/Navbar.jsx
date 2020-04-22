import React from 'react'
import '../styles/Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import homeButton from '../assets/homeButton.png';
import homeBtn from '../assets/homeBtn.png';

import AllJobs from './AllJobs';
import MySavedJobs from './MySavedJobs';
import SignOut from './SignOut';
import UserName from './UserName';
import Logo from './Logo';
import SearchForm from './SearchForm';


const Navbar = (props) => {
    return (
        <Router>
            <nav>

                <ul className="nav-links">
                    <li>
                        <Link className="link" to="/"><img src={homeBtn} id='nav-img' /></Link>
                    </li>
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