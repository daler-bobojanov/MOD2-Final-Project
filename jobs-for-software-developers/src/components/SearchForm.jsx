import React from 'react';
import '../styles/SearchForm.css';

const SearchForm = props => (
    // bootstrap library used to style form & elements
    <form className="search-form" onSubmit={props.searchJobs}>

        <div className="form-group">
            <label htmlFor="jobDescription">Job Description</label><br />
            <input className="form-control" id="input-search1" type="text" name="jobDescription" placeholder="Filter by title, company, expertise, or programming language.." />
        </div>

        <div className="form-group">
            <label htmlFor="location">Location</label><br />
            <input className="form-control" type="text" name="location" id="input-search2" placeholder="Filter by city, state, zip code or country..." />
        </div>

        <div className="form-check ">
            <br />
            <input type="checkbox" name="fullTime" className="form-check-input" />
            <label htmlFor="fullTimeOnly" className="form-check-label">Full Time Only</label>
        </div>
        <button className="btn btn-primary btn-lg">Search</button>

    </form>
);

export default SearchForm;

/*
TO DO:
- make use of Full Time checkbox;
- add image as placeholder; -> DONE!
- fix button style; -> DONE!
- make overall look prettier; -> DONE!
*/

