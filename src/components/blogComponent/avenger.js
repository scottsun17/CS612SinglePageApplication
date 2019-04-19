import React, { Component } from 'react';

class Avangers extends Component {
  render() {
    return (
      <div className="main">
        <div>
        <h1>
        	Ready for Avengers Endgame?
        </h1>
        <h6>
        Date: 4/12/2019
        </h6>
            <img  src={ require('../pages/images/avenger.jpg') } className="blogImage" />
        <p>
       Welp Welp Welp, the endgame is finally here. Is everyone as excited as me to watch the endGame???? In the movie, half of the population in the universe is wiped out. Our beloved Spiderman is gone with the wind, the love bird Wanda and Jarvis both left the living world, and so many other character was gone. However, at the end, we saw that Nick Fury called for helps from Captain Marvel! Captain Marvel showed up to at the sheild and asked for Fury but found out hes gone. earlier this year, we saw the new Captain Marvel movie and found out that Fury's blind eye was caused by an orange cat! It is just too great.
        </p>
        <br />
        <p>
        So what will happen in end game? Will the Avangers reverse the spell that destoryed half of the population? How will they do that? And how Captain Marvel will help in this exciting new movie?? I am not sure about you but I am excited to watch it this Thursday!
        </p>
      
         </div>
      </div>
    );
  }
}

export default Avangers;
