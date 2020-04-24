import React from 'react';
import axios from 'axios';

import '../styles/AllJobs.css';
import SearchForm from './SearchForm';
import JobDescriptionModal from './JobDescriptionModal';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

// const BASE_URL = "https://jobs.github.com/positions.json?markdown=false&page=&location=&description=";

// https://jobs.github.com/positions.json?markdown=false&page=&location=${location}&description=${description}
class Logo extends React.Component {
    state = {
        data: [],
        error: undefined
    }


    searchJobs = async (e) => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        const description = e.target.elements.jobDescription.value;

        try {
            const api_call = await axios.get(`https://jobs.github.com/positions.json?markdown=false&page=&location=${location}&description=${description}`);
            // console.log(api_call.data, "TEST");
            this.setState({ data: api_call.data });
            // console.log(this.state.data, "State from Logo")
            return api_call;
        } catch (e) {
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
                {postJobs}
                <ScrollUpButton />
            </div>
        );
    }
};

export default Logo;