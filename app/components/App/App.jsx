import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import OrderBox from '../OrderBox/OrderBox.jsx';
import PromoCodes from '../PromoCodes/PromoCodes.jsx';
import Footer from '../Footer/Footer.jsx';

class App extends Component {
  
  render() {
    return (
    	<div className="app">
				<Header user={1}/>
				<OrderBox />
				<PromoCodes />
				<Footer/>
    	</div>
    );
  }
}

export default App;
