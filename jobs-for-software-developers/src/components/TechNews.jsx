import React from 'react';
import axios from 'axios';


const _api_key = process.env.REACT_APP_NEWS_API_KEY;

class TechNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.fetchNews();

    }

    async fetchNews() {
        try {
            const api_call = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${_api_key}`);
            console.log(api_call.data, "TEST");
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default TechNews;

/*
TO DO:
- conver function expressions to ES6
*/