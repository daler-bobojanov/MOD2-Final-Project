import React from 'react'
import '../styles/Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import homeButton from '../assets/homeButton.png';
import homeBtn from '../assets/homeBtn.png';

import AllJobs from './AllJobs';
import MySavedJobs from './MySavedJobs';
// import SignOut from './SignOut';
// import UserName from './UserName';
import Logo from './Logo';
// import SearchForm from './SearchForm';


class Navbar extends React.Component {

    // function to Refresh the page upon Home button click
    refreshPage() {
        window.location.reload(false);
    }

    render() {
        return (
            <Router>
                <nav>
                    <ul className="nav-links">
                        <li onClick={this.refreshPage}>
                            <Link className="link" to="/"><img src={homeBtn} id='nav-img' alt="home-button" /></Link>
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
}

export default Navbar;