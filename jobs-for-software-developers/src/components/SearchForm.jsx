import React from 'react';
import '../styles/SearchForm.css';

const SearchForm = () => {
    return (
        <form className="search-form">
            <div>
                <label>Job Description</label><br />
                <input type="text" name="" placeholder="Complete later" />
            </div>
            <br />
            <div>
                <label>Location</label><br />
                <input type="text" name="" placeholder="Complete later" />
            </div>
            <br />
            <button>Search</button>
        </form>
    );
}

export default SearchForm;
