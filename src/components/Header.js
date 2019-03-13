import React, { useState } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Header() {
  const [isOpen, expandHeader] = useState(false);
  //   toggle = () => {
  //     expandHeader(isOpen => !isOpen);
  //   };
  return (
    <div>
      <div className="header-contact">
        <p>CONTACT : 8450999961 / 8450999943 | info@acetattooz.com</p>
      </div>
      <Navbar light color="light" expand="md" className="cust-navbar">
        <NavbarBrand>My Tattozz</NavbarBrand>
        <NavbarToggler
          className="navbar-toggler"
          onClick={() => expandHeader(isOpen => !isOpen)}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="md-auto ml-auto mr-20 cust-nav" navbar>
            <NavItem>
              <NavLink className="cust-nav-links">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cust-nav-links">Tattozz</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cust-nav-links">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cust-nav-links">Contact us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
