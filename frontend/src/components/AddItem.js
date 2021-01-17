import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "../api";

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      deviceName: "",
      os: "",
      manufacturer: "",
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { deviceName, os, manufacturer } = this.state;
    const deviceData = { deviceName, os, manufacturer };
    axios
      .put("/", deviceData)
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
            <Form.Group controlId="formGroupDevice">
              <Form.Label>Device Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Device name"
                name="deviceName"
                value={this.state.deviceName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupOs">
              <Form.Label>Operating System</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OS name"
                name="os"
                value={this.state.os}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formGroupManufacturer">
              <Form.Label>Manufacturer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Manufacturer Name"
                name="manufacturer"
                value={this.state.manufacturer}
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

export default AddItem;
