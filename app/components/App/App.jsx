import React, { Component } from 'react';
import Header from '../Header/Header.jsx';

class App extends Component {
  render() {
    return (
    	<div className="app">
				<Header user={1}/>
    	</div>
    );
  }
}

export default App;
