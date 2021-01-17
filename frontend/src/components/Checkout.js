import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "../api";

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      device: {},
      lastCheckedOutBy: "",
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
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { _id } = this.state.device;
    const { lastCheckedOutBy } = this.state;
    const deviceData = { id: _id, lastCheckedOutBy };
    axios
      .post("/checkout", deviceData)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ error: error.response.data.message });
      });
  };
  render() {
    if (this.state.device.isCheckedOut) {
      return (
        <div>
          <Container>
            {"Already checked out by " + this.state.device.lastCheckedOutBy}
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            <Form bg="dark" variant="dark" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formGroupDevice">
                <Form.Label>Checkout By</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Device name"
                  name="lastCheckedOutBy"
                  value={this.state.lastCheckedOutBy}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Item
              </Button>
              {!!this.state.error && <div>{this.state.error}</div>}
            </Form>
          </Container>
        </div>
      );
    }
  }
}

export default Checkout;
