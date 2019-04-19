import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import SideContent from './components/pages/sidecontent';
import GOT from './components/blogComponent/got';
import Avangers from './components/blogComponent/avenger';
import Pikachu from './components/blogComponent/pikachu';

//  includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App site">
          <div className="">
            <Header />
            <div className="Site-content">
             
              <Route exact path='/' component={Homepage} />
              <Route exact path='/GOT' component={GOT} />
              <Route exact path='/Avangers' component={Avangers} />
              <Route exact path='/Pikachu' component={Pikachu} />
              <SideContent />
              
              
            </div>
          </div>

           

        </div>
      <Footer />
    </Router>
    );
  }
}

export default App;
