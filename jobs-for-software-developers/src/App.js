import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import SearchForm from './components/SearchForm';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        <Navbar />

        {/* </header> */}
        {/* <SearchForm /> */}

      </div>
    );
  }
}

export default App;
