import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div className="main">
        <h1>
          <Link to="GOT">Game of Thrones Season 8 is here!</Link>
        </h1>
        <h6>
        Date: 4/12/2019
        </h6>
        <div className="blogRow">
          <div className="blogColumn">
           <img  src={ require('./images/GOT.jpg') } className="summaryImage" />
          </div>
          <div className="blogColumn">
            <p className="blogPostSummary">
            We are all excited about the returning of Game of Thrones Season 8. Let talk about what happened in the first episode of the show! 
            <br /><br />
            <b>MAJOR SPOILER ALERT!! </b>
            <br />
            Do not click if you have not watched it yet!!
            </p>
          </div>
        </div>

        <h1>
          <Link to="/Avangers">Ready for Avengers Endgame?</Link>
        </h1>
        <h6>
        Date: 4/12/2019
        </h6>
        <div className="blogRow">
          <div className="blogColumn">
           <img  src={ require('./images/avenger.jpg') } className="summaryImage" />
          </div>
          <div className="blogColumn">
            <p className="blogPostSummary">
            This April, with the not dead yet Avengers, we will see how they fight with the big purple alien man! Are you ready to see the exciting movie where human can fly in the space and time travel with a green stone? 
            <br />
            <b>You bet!! </b>
            <br />
            Avegers, this month on the 25th in your local theater
            </p>
          </div>
        </div>

        <h1>
          <Link to="/Pikachu">Wait what? Pokémon: Detective Pikachu?</Link>
        </h1>
        <h6>
        Date: 4/12/2019
        </h6>
        <div className="blogRow">
          <div className="blogColumn">
           <img  src={ require('./images/pokemon.jpg') } className="summaryImage" />
          </div>
          <div className="blogColumn">
            <p className="blogPostSummary">
           Wait what?? Detctive Pikachu? You bet it is right! A cutie little Pikachu trying to solve crime I guess. Somehow reminded me of the TV show, Lucifer, the dark lord, living in LA solving crime. Ridiculous! But also exciting!! Can't wait to see how it is turned out! 
            <br /><br />
            <b>BTW Mr. Mime looks super creepy.. </b>
            <br /><br />
            </p>
          </div>
        </div>
        
      </div>

    );
  }
}

export default Homepage;
