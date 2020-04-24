import React from 'react';
import '../styles/SearchForm.css';

const SearchForm = props => (
    // return (
    <form className="search-form" onSubmit={props.searchJobs}>
        <div>
            <label htmlFor="jobDescription">Job Description</label><br />
            <input className="search-input" type="text" name="jobDescription" placeholder="Filter by title, company, expertise, or programming language.." />
        </div>

        <div>
            <label htmlFor="location">Location</label><br />
            <input className="search-input" type="text" name="location" placeholder="Filter by city, state, zip code or country..." />
        </div>

        <div>
            <br />
            <input type="checkbox" name="fullTime" />
            <label id="ft-only" htmlFor="fullTimeOnly">Full Time Only</label>
        </div>
        <button id="search-form-button" >Search</button>
    </form>
    // );
    // }
);

export default SearchForm;

/*
TO DO:
- make use of Full Time checkbox;
- add image as placeholder;
- fix button style;
- make overall look prettier;
*/

