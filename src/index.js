import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>Hi</p>
        <SearchBar />
      </div>
    );
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('container')
);
