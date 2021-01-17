import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mx-auto my-3"
      >
        <Navbar.Brand>
          <Link to="/">Device Tracker</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="create">Add Item</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="checkout">Checkout</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="weekly-record">Weekly Record</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
