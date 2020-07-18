import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppNavbar(props) {
  const { pathname } = props.history.location;
  return (
    <Container
      style={{
        maxWidth: "100%",
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Navbar
        bg="dark"
        variant="dark"
        style={{ justifyContent: "space-between", padding: "0", height: "4em" }}
      >
        <Nav activeKey={pathname}>
          <Nav.Item>
            <Nav.Link eventKey="/home" href="#home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/products" href="#products">
              Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                window.localStorage.removeItem("jwt");
                props.history.go(0);
              }}
            >
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default AppNavbar;
