import React, { Component } from "react";
// import "./App.css";
import CardList from "./Photos/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=30")
      .then(response => response.json())
      .then(data => {
        this.setState({ photos: data });
      });
  }

  render() {
    return (
      <div className="cardList">
        <CardList photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
