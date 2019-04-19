import React, { Component } from 'react';
import {
	Link,
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

      	<img  src={ require('../pages/images/sunLogo.png') } className="logo logoSize" />
        <h1 className="logoText">Scott-Land of Couch Potato</h1>
      	<nav>
      	  <ul>
      	   <li className="first">
      	    <Link to="/">Home</Link>
      	   </li>
      	   <li>
      	    <Link to="/GOT">GOT</Link>
      	   </li>
           <li>
            <Link to="/Avangers">Avangers</Link>
           </li>
      	   <li className="last">
      	    <Link to="/Pikachu">Pikachu</Link>
           </li>
      	  </ul>
      	 </nav>
      	    	
      </header>
    );
  }
}

export default Header;
