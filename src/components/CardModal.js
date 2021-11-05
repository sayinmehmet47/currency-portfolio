import Button from "@restart/ui/esm/Button";
import React, { useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { dailyCurrency } from "../store/Actions/currencyActions";

export default function CardModal() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dailyCurrency());
  }, []);

  const currencyDaily = useSelector((state) => state.currencyDaily);
  return (
    <Container fluid className="mt-4 p-5">
      <Row className="m-2 shadow  p-5" xs={1} sm={2} md={3} lg={8}>
        <Col>
          <Row>
            <BsFillArrowUpCircleFill className="col-3" color="green" />
            {/* <Col >⬆</Col> */}
            <Col className="col-9">
              <Row>
                <Col className="">USD/TRY</Col>
              </Row>
              <Row>
                {" "}
                <Col className="fw-bold">
                  {" "}
                  {Number.parseFloat(1 / currencyDaily["USD"]).toFixed(2)}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <BsFillArrowUpCircleFill className="col-3" color="green" />
            {/* <Col >⬆</Col> */}
            <Col className="col-9">
              <Row>
                <Col className="">CAD/TRY</Col>
              </Row>
              <Row>
                {" "}
                <Col className="fw-bold">
                  {Number.parseFloat(1 / currencyDaily["CAD"]).toFixed(2)}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <BsFillArrowUpCircleFill className="col-3" color="green" />
            {/* <Col >⬆</Col> */}
            <Col className="col-9">
              <Row>
                <Col className="">EUR/TRY</Col>
              </Row>
              <Row>
                {" "}
                <Col className="fw-bold">
                  {" "}
                  {Number.parseFloat(1 / currencyDaily["EUR"]).toFixed(2)}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <BsFillArrowDownCircleFill className="col-3" color="red" />
            {/* <Col >⬆</Col> */}
            <Col className="col-9">
              <Row>
                <Col className="">GBP/TRY</Col>
              </Row>
              <Row>
                {" "}
                <Col className="fw-bold">
                  {" "}
                  {Number.parseFloat(1 / currencyDaily["GBP"]).toFixed(2)}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <BsFillArrowUpCircleFill className="col-3" color="green" />
            {/* <Col >⬆</Col> */}
            <Col className="col-9">
              <Row>
                <Col className="">CHF/TRY</Col>
              </Row>
              <Row>
                {" "}
                <Col className="fw-bold">
                  {" "}
                  {Number.parseFloat(1 / currencyDaily["CHF"]).toFixed(2)}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <BsFillArrowDownCircleFill className="col-3" color="red" />
            {/* <Col >⬆</Col> */}
            <Col className="col-9">
              <Row>
                <Col className="">RUB/TRY</Col>
              </Row>
              <Row>
                {" "}
                <Col className="fw-bold">
                  {" "}
                  {Number.parseFloat(1 / currencyDaily["RUB"]).toFixed(2)}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
