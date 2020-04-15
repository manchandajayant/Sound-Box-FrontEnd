import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

export default class NavBarComponent extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{
            backgroundColor: " rgba(240, 225, 220, 0.1)",
            boxShadow:
              "0px 2px 4px -1px, rgba(0,0,0,0.2), 0px 4px 5px 0px, rgba(0,0,0,0.14), 0px 1px 10px 0px ,rgba(0,0,0,0.12)",
            border: "solid 1px rgba(255)",
          }}
        >
          <Navbar.Brand>
            <Typography
              style={{
                color: "black",
                marginRight: "20px",
                border: "solid 0.5px black",
                borderRadius: "2px",
                backgroundColor: "rgb(120, 141, 154)",
              }}
            >
              {" "}
              <Link
                style={{
                  color: "black",
                  textDecoration: "inherit",
                }}
                to="/"
              >
                v e r b e r
              </Link>
            </Typography>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link
                  href="/spaces"
                  style={{
                    color: "black",
                  }}
                >
                  <Typography>Spaces</Typography>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/newspace"
                  style={{
                    color: "black",
                  }}
                >
                  <Typography>Create a New Space</Typography>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link
                  href="/login"
                  style={{
                    color: "black",
                  }}
                >
                  <Typography>Login</Typography>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/about"
                  style={{
                    color: "black",
                  }}
                >
                  <Typography>About</Typography>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
