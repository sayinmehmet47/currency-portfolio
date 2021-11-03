import React, { useState } from "react";
import { Parallax, Background } from "react-parallax";
import Image from "../images/moneyNew.jpg";

import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  NavItem,
} from "reactstrap";

export default function Mainpage() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <div class="parallax d-none d-lg-flex">
        <div class="parallax-inner">
          <Link
            to="/login"
            className="btn btn-primary px-5 ms-3"
            style={{ position: "absolute", marginTop: "125px" }}
          >
            SIGN - IN
          </Link>
          <Link
            to="/register"
            className="btn btn-success px-5 ms-3"
            style={{ position: "absolute", marginTop: "170px" }}
          >
            REGISTER
          </Link>
        </div>
        <div class="parallax-inner-2 text-center">
          <h1>Trade on MS-BANK</h1>
        </div>
      </div>

      <div class="container d-block d-lg-none">
        <div>
          <Navbar color="faded" light>
            <NavbarBrand className="me-auto" href="/">
              reactstrap
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse navbar isOpen={!collapsed}>
              <Nav navbar>
                <NavItem>
                  <Link to="/login">Login</Link>
                </NavItem>
                <NavItem>
                  <Link to="/register">Register</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <img src={Image} class="img-fluid " alt="mushroom"></img>
        <span class=" fs-2 fw-bold">Mantar severlere</span>
      </div>
    </div>
  );
}
