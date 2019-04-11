import React, { Component } from "react";
import Header from "./components/Header";
class App extends Component {
  state = {
    news: []
  };

  componentDidMount = () => {
    this.checkNews();
  };

  checkNews = () => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=4bacc94fabe34ced8c6b9c6a53c467e2";

    fetch(url)
      .then(resp => {
        return resp.json();
      })
      .then(news => {
        this.setState({ news: news.articles });
      });
  };

  render() {
    return (
      <div className="App">
        <Header title="Noticias" />
      </div>
    );
  }
}

export default App;
