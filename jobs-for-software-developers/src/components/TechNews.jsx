import React from 'react';
import axios from 'axios';
import '../styles/TechNews.css';
// source https://www.npmjs.com/package/react-scroll-up-button#circle-arrow-button;
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import * as ReactBootStrap from 'react-bootstrap';

const _api_key = process.env.REACT_APP_NEWS_API_KEY;

class TechNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: false
        }
    }

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews = async () => {
        try {
            const api_call = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${_api_key}&pageSize=40`);
            // console.log(api_call.data.articles);
            this.setState({ data: api_call.data.articles, loading: true });
        } catch (e) {
            window.alert(e);
            console.error(e);
        }
    }

    render() {
        const postNews = this.state.data.map((post, id) => (
            <div key={id} className="news-grid-container-child">
                <div id="news-anchor">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                </div>
                <img src={post.urlToImage} alt="news-headline" className="news-image" />
                <div>
                    <p>{post.description}</p>
                </div>
                <div id="source-date">
                    <p>Source: {post.source.name}</p>
                    <p>Published: {post.publishedAt}</p>
                </div>
            </div>
        ))
        return (
            <React.Fragment>
                <div>
                    <h1 id="headline-h1">Today's Top Headlines</h1>
                </div>
                <div className="news-grid-container">
                    {this.state.loading ? (postNews) : (<ReactBootStrap.Spinner animation="border" variant="primary" style={{ margin: '0 200% auto' }} />)}
                    {/* {postNews} */}

                    <footer>
                        <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">Powered by News API</a>
                    </footer>
                </div>
                <ScrollUpButton />
            </React.Fragment>
        );
    }
}

export default TechNews;

/*
TO DO:
- convert function expressions to ES6 -> DONE!
*/