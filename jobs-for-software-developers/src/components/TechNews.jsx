import React from 'react';
import axios from 'axios';
import '../styles/TechNews.css';

const _api_key = process.env.REACT_APP_NEWS_API_KEY;

class TechNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchNews();

    }

    async fetchNews() {
        try {
            const api_call = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${_api_key}`);
            console.log(api_call.data.articles);
            this.setState({ data: api_call.data.articles });
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        const postNews = this.state.data.map((post, id) => (
            <div key={id} className="news-grid-container">
                <h2>{post.title}</h2>
                <p>{post.source.name}</p>
            </div>
        ))
        return (
            <React.Fragment>
                {postNews}

            </React.Fragment>
        );
    }
}

export default TechNews;

/*
TO DO:
- conver function expressions to ES6
*/