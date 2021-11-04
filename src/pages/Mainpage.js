import React, { useState } from "react";
import { Parallax, Background } from "react-parallax";
import Image from "../images/moneyNew.jpg";
import Logo from "../images/newest.png";

import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  NavItem,
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Button from "@restart/ui/esm/Button";
import CardModal from "../components/CardModal";

export default function Mainpage() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <div class="parallax d-none d-lg-flex">
        <div class="parallax-inner">
          <Link
            to="/login"
            className="btn btn-primary px-5"
            style={{
              position: "absolute",
              marginTop: "55px",
              marginLeft: "37%",
            }}
          >
            SIGN - IN
          </Link>
          <Link
            to="/register"
            className="btn btn-success px-5 "
            style={{
              position: "absolute",
              marginTop: "55px",
              marginLeft: "50%",
            }}
          >
            REGISTER
          </Link>
        </div>
        <div class="parallax-inner-2 text-center">
          <h1>Trade on MS-BANK</h1>
        </div>
        <img
          style={{
            position: "absolute",
          }}
          src={Logo}
          className="m-3"
          alt="fdf"
          width={50}
          height={50}
        />
      </div>

      <div class=" d-block d-lg-none">
        <div>
          <Navbar color="faded" light>
            <NavbarBrand className="me-auto" href="/">
              <img src={Logo} alt="fdf" width={50} height={50} />
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
        <h2 className="position-absolute mt-4 top-50 start-50 translate-middle-x text-light bg-dark">
          Trade on MS-BANK
        </h2>
      </div>
      <CardModal />
    </div>
  );
}
