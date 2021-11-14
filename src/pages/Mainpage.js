import React, { useState } from "react";
import Image from "../images/moneyNew.jpg";
import Logo from "../images/newest.png";

import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Col,
  Row,
} from "reactstrap";
import CardModal from "../components/CardModal";
import Converter from "../components/Converter";
import DailyNews from "../components/DailyNews";
import Footer from "../components/Footer/Footer";

export default function Mainpage() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <div className="parallax d-none d-lg-flex">
        <div className="parallax-inner">
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
        <div className="parallax-inner-2 text-center">
          <h1>Trade on MT-BANK</h1>
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

      <div className="d-block d-lg-none">
        <div>
          <Navbar color="faded" light>
            <NavbarBrand className="me-auto" href="/">
              <img src={Logo} alt="fdf" width={50} height={50} />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="me-2" />
            <Collapse navbar isOpen={!collapsed}>
              <Nav navbar>
                <NavItem>
                  <Link
                    to="/login"
                    className="btn btn-primary mx-5 my-1 d-block"
                  >
                    Login
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    to="/register"
                    className="btn btn-success mx-5 my-1 d-block"
                  >
                    Register
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <img src={Image} className="img-fluid " alt="bank-pic"></img>
        <h2 className="text-light bg-dark">Trade on MT-BANK</h2>
      </div>
      <CardModal />
      <Row lg={2} md={1} sm={1}>
        <Col lg="9">
          {" "}
          <DailyNews />
        </Col>
        <Col lg="3">
          {" "}
          <Converter />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
