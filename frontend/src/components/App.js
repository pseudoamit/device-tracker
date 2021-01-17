import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Router } from "../Router";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Router />
        </Container>
      </div>
    );
  }
}

export default App;
