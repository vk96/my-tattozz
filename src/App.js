import React, { Component } from "react";
import { Header, Footer } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Welcome tattozz</p>
        <Footer />
      </div>
    );
  }
}

export default App;
