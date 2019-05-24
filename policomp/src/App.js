import React from 'react';
import './App.css';
import MainContainer from './MainContainer';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      topStories: []
      
    }

  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9663743b34524026854a945d187b6f6e`)
    .then(res => res.json())
    .then(articles => this.setState({ topStories: articles.articles}))
  }

  

  render() {
    
    return (
      <div className="App">
        <MainContainer articles={this.state.topStories} />
      </div>
    );
  }
}

export default App;
