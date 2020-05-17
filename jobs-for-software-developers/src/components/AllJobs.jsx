import React from 'react'
import axios from 'axios';

import '../styles/AllJobs.css';
// import SearchForm from './SearchForm';
import JobDescriptionModal from './JobDescriptionModal';
// Page scroll up button. Source code from - https://www.npmjs.com/
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import * as ReactBootStrap from 'react-bootstrap';


class AllJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false
        }
    }

    componentDidMount() {
        this.getAllJobs();
    }

    // async API call 
    getAllJobs = async () => {
        try {
            const api_call = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json?markdown=false&page=`);

            this.setState({ data: api_call.data, loading: true })
            // console.log(this.state.data, 'This is result of this.state');
            return api_call;

        } catch (e) {
            window.alert(e);
            console.error(e);
        }
    }

    render() {
        const postJobs = this.state.data.map(post => (
            <div className="container-all-jobs" key={post.id}>
                <JobDescriptionModal value={post} />
                <p>Company: <a id="container-company-url" href={post.company_url} target="_blank" rel="noopener noreferrer">{post.company}</a></p>
                <p>Location: {post.location}</p>
                <p>Type: {post.type}</p>
                <p>Posted on: {post.created_at}</p>
            </div>
        ))
        return (
            <React.Fragment>
                <hr /><br />
                {this.state.loading ? (postJobs) : (<ReactBootStrap.Spinner animation="border" variant="primary" style={{ marginLeft: '50%' }} />)}
                <ScrollUpButton />
            </React.Fragment >
        );
    }
}

export default AllJobs;