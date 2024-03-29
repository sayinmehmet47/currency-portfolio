import { useState } from 'react';
import Image from '../images/moneyNew.jpg';
import Logo from '../images/newest.png';

import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Col,
  Row,
} from 'reactstrap';

import CardModal from '../components/CardModal';
import Converter from '../components/Converter';
import DailyNews from '../components/DailyNews';
import Footer from '../components/Footer/Footer';
import { Head } from '../components/Head';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Mainpage() {
  const [collapsed, setCollapsed] = useState(true);
  const auth = useSelector((state: RootState) => state.auth.isLogin);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Head description="Welcome to currency-portfolio" />
      <div className="parallax d-none d-lg-flex">
        <div className="parallax-inner">
          {auth ? (
            <div className="position-absolute start-45 top-20 me-3">
              <Link to="/dashboard" className="btn btn-primary">
                Dashboard
              </Link>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-primary px-5"
                style={{
                  position: 'absolute',
                  marginTop: '55px',
                  marginLeft: '36%',
                }}
              >
                SIGN - IN
              </Link>
              <Link
                to="/register"
                className="btn btn-success px-5 "
                style={{
                  position: 'absolute',
                  marginTop: '55px',
                  marginLeft: '50%',
                }}
              >
                REGISTER
              </Link>
            </>
          )}
        </div>
        <div className="parallax-inner-2  mt-5">
          <h1>Trade on MT-BANK</h1>
        </div>
        <img
          style={{
            position: 'absolute',
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
                {auth ? (
                  <Link
                    to="/dashboard"
                    className="btn btn-primary mx-5 my-1 d-block"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
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
                  </>
                )}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <img src={Image} className="img-fluid " alt="bank-pic"></img>
        <h2 className="text-light bg-dark">Trade on MT-BANK</h2>
      </div>
      <div className="TrendingNow-heading mt-5 mx-5 ">Currency Rates</div>

      <CardModal />
      <Row lg={2} md={1} sm={1} className="container-fluid">
        <Col lg="9">
          {' '}
          <DailyNews />
        </Col>
        <Col lg="3">
          {' '}
          <Converter />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
