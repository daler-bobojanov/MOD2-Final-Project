import React from 'react';
import axios from 'axios';

import '../styles/AllJobs.css';
import SearchForm from './SearchForm';
import JobDescriptionModal from './JobDescriptionModal';
// Page scroll up button. Source code from - https://www.npmjs.com/
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import * as ReactBootStrap from 'react-bootstrap';

// const BASE_URL = "https://jobs.github.com/positions.json?markdown=false&page=&location=&description=";
// https://jobs.github.com/positions.json?markdown=false&page=&location=${location}&description=${description}

class Logo extends React.Component {
    state = {
        data: [],
        error: undefined,
        loading: false
    }


    searchJobs = async (e) => {
        e.preventDefault();
        // grabbing value from SearchForm inputs
        const location = e.target.elements.location.value;
        const description = e.target.elements.jobDescription.value;

        try {
            const api_call = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json?markdown=false&page=&location=${location}&description=${description}`);
            // console.log(api_call.data, "TEST");
            this.setState({ data: api_call.data, loading: false });
            console.log(this.state.data, "State from Logo")
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
            <div>
                <SearchForm searchJobs={this.searchJobs} />
                <br />
                <br />
                {/* {this.state.loading ? (<ReactBootStrap.Spinner animation="border" variant="primary" style={{ marginLeft: '50%' }} />) : (<ReactBootStrap.Spinner animation="border" variant="primary" style={{ marginLeft: '50%' }} />)} */}
                {postJobs}
                <ScrollUpButton />
            </div>
        );
    }
};

export default Logo;