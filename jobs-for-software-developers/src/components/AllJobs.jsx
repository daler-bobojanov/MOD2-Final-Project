import React from 'react'
import axios from 'axios';

import '../styles/AllJobs.css';
// import SearchForm from './SearchForm';
import JobDescriptionModal from './JobDescriptionModal';
// Page scroll up button. Source code from - https://www.npmjs.com/
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';


class AllJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getAllJobs();
    }

    // async API call 
    async getAllJobs() {
        try {
            const api_call = await axios.get(`https://jobs.github.com/positions.json?markdown=false&page=`);

            this.setState({ data: api_call.data })
            console.log(this.state.data, 'This is result of this.state');
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
            <React.Fragment>
                <hr /><br />
                {postJobs}
                <ScrollUpButton />
            </React.Fragment >
        );
    }
}

export default AllJobs;