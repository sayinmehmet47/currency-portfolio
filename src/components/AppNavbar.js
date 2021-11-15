import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/newest.png";
import { CgProfile } from "react-icons/cg";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { logout } from "../store/Actions/AuthActions";

export const AppNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.name);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="mb-5 shadow">
        <NavbarBrand href="/">
          <img src={logo} alt="fdf" width={50} height={50} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse
          className="justify-content-end me-5"
          style={{ color: "red" }}
          isOpen={!collapsed}
          navbar
        >
          <Nav navbar>
            <NavItem className="d-flex align-items-center justify-content-center">
              <CgProfile color="white" />
              <NavLink href="#">{`welcome ${userName}`}</NavLink>{" "}
            </NavItem>{" "}
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className="d-flex align-items-center justify-content-center ms-4 rounded"
                onClick={() => dispatch(logout())}
              >
                Logout
              </NavLink>{" "}
            </NavItem>{" "}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
