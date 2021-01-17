import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "../api";

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      device: {},
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("/" + this.props.match.params.id).then((res) => {
      this.setState({ device: res.data });
    });
  }

  handleChange = (event) => {
    const state = this.state.device;
    state[event.target.name] = event.target.value;
    this.setState({ device: state });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { _id, feedback } = this.state.device;
    const deviceData = { id: _id, feedback };
    axios
      .post("/feedback", deviceData)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error: error.response.data.message });
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Form bg="dark" variant="dark" onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>User Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="feedback"
                value={this.state.device.feedback}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Feedback
            </Button>
            {!!this.state.error && <div>{this.state.error}</div>}
          </Form>
        </Container>
      </div>
    );
  }
}

export default Feedback;
