import React, { Component } from 'react';

var googleNewsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d9824ca5afc74b358d6640527a707a1c';

class SideContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };

    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => 
      this.fetchData(), 500);
  }

  fetchData() {
    fetch(googleNewsUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      
  }


  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (

          <div className="sideMenu">
          <h1>Top News</h1>
          {articles.map(article => (
            
           <div key={article.title} className="news">
              <b>Title:</b> {article.title} <br /><br />
              <b>Published Date:</b> {article.publishedAt} <br /><br />
              <b>Author:</b> {article.author} <br /><br />
            
            </div>
          ))}
        </div>
      );
    }
  }

    componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default SideContent;
