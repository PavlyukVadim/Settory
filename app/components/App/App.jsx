import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

class App extends Component {
  render() {
    return (
    	<div className="app">
				<Header user={1}/>
				<Footer/>
    	</div>
    );
  }
}

export default App;
