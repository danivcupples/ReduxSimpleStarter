import React, { Component } from 'react';

//define search bar component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} 
        />
      </div>
    );
  }
}

//export code so that it's available to index.js
export default SearchBar;
