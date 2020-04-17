import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function NavigationBar() {
    return(
        <div>
            <Navbar collapseOnSelect expand="sm" bg="danger" variant="dark">
                <img
                    src="Logo.png"
                    width="50"
                    height="60"
                    className="d-inline-block align-top"
                    alt="The Social Network logo"
                />
                <Navbar.Brand className="LogoName"href="#home">The Social Network</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#signup">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default NavigationBar;