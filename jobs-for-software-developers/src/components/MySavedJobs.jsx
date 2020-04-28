import React from 'react'


class MySavedJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedJobs: []
        }
    }

    getJobID = () => {
        let idArray = [];
        idArray.push(this.props.jobID);
        this.setState({ savedJobs: idArray })
        // console.log(idArray, 'My ID array');
    }

    render() {
        return (
            <React.Fragment>
                <button type="button" onClick={this.getJobID}>Bookmark</button>
                {/* {console.log(this.idArray)} */}
                <h2>This is My Saved jobs tab. Currently under construction...</h2>
            </React.Fragment>
        );
    }
}

export default MySavedJobs;