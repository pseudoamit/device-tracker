import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../api";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      error: "",
    };
  }

  componentDidMount() {
    axios.get("/").then((res) => {
      this.setState({ devices: res.data });
    });
  }

  deleteHandle = (id) => {
    axios
      .delete(`/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        this.setState({ error: error.response.data.message });
      });
  };

  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Device Name</th>
            <th>OS</th>
            <th>Manufacturer</th>
            <th>Checkout</th>
            <th>Action</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {this.state.devices.map((device) => (
            <tr key={device._id}>
              <td>{device.deviceName}</td>
              <td>{device.os}</td>
              <td>{device.manufacturer}</td>
              <td>
                <Link to={"/checkout/" + device._id}>Checkout</Link>
              </td>
              <td>
                <Button
                  variant="danger"
                  type="submit"
                  onClick={() => {
                    this.deleteHandle(device._id);
                  }}
                >
                  Remove
                </Button>
              </td>
              <td>
                <Link to={"/feedback/" + device._id}>Give Feedback</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default List;

//this.props.match.params.id
