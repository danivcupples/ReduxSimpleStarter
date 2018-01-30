import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD5gCD2fsYEhNixawR_8FsiZI5GtRXZFPo';

// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (insert into the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
