import React, { Component } from "react";
import News from "./New";

class NewsContainer extends Component {
  render() {
    return (
      <div className="row">
        {this.props.news.map(news => (
          <News key={news.url} news={news} />
        ))}
      </div>
    );
  }
}

export default NewsContainer;
