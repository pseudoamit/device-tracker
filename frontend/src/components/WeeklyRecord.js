import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "../api";

class WeeklyRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
    };
  }

  componentDidMount() {
    axios.get("/weekly-record").then((res) => {
      this.setState({ devices: res.data });
    });
  }

  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Device Name</th>
            <th>OS</th>
            <th>Manufacturer</th>
            <th>Checked out by</th>
            <th>FeedBack</th>
          </tr>
        </thead>
        <tbody>
          {this.state.devices.map((device) => (
            <tr key={device._id}>
              <td>{device.deviceName}</td>
              <td>{device.os}</td>
              <td>{device.manufacturer}</td>
              <td>{device.lastCheckedOutBy}</td>
              <td>{device.feedback}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default WeeklyRecord;
