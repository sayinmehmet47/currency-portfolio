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
    console.log(currencyDaily.USD);
  }, []);

  const currencyDaily = useSelector((state) => state.currencyDaily);

  return (
    <Container fluid className="mt-4 p-5">
      {currencyDaily.USD ? (
        <Row className="m-2 shadow  p-5" xs={1} sm={2} md={3} lg={8}>
          <Col className="mb-2">
            <Row>
              {currencyDaily.USD["Change"].includes("-") ? (
                <BsFillArrowDownCircleFill className="col-3" color="red" />
              ) : (
                <BsFillArrowUpCircleFill className="col-3" color="green" />
              )}
              <Col className="col-9 text-start">
                <Row>
                  <Col className="">USD/TRY</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.USD.Buying}</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.USD.Change}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row>
              {currencyDaily.CAD["Change"].includes("-") ? (
                <BsFillArrowDownCircleFill className="col-3" color="red" />
              ) : (
                <BsFillArrowUpCircleFill className="col-3" color="green" />
              )}
              <Col className="col-9 text-start">
                <Row>
                  <Col className="">CAD/TRY</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold">{currencyDaily.CAD.Buying}</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.CAD.Change}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row>
              {currencyDaily.EUR["Change"].includes("-") ? (
                <BsFillArrowDownCircleFill className="col-3" color="red" />
              ) : (
                <BsFillArrowUpCircleFill className="col-3" color="green" />
              )}
              <Col className="col-9 text-start">
                <Row>
                  <Col className="">EUR/TRY</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.EUR.Buying}</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.EUR.Change}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row>
              {currencyDaily.GBP["Change"].includes("-") ? (
                <BsFillArrowDownCircleFill className="col-3" color="red" />
              ) : (
                <BsFillArrowUpCircleFill className="col-3" color="green" />
              )}
              <Col className="col-9 text-start">
                <Row>
                  <Col className="">GBP/TRY</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.GBP.Buying}</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.GBP.Change}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row>
              {currencyDaily.CHF["Change"].includes("-") ? (
                <BsFillArrowDownCircleFill className="col-3" color="red" />
              ) : (
                <BsFillArrowUpCircleFill className="col-3" color="green" />
              )}
              <Col className="col-9 text-start">
                <Row>
                  <Col className="">CHF/TRY</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.CHF.Buying}</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.CHF.Change}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row>
              {currencyDaily.RUB["Change"].includes("-") ? (
                <BsFillArrowDownCircleFill className="col-3" color="red" />
              ) : (
                <BsFillArrowUpCircleFill className="col-3" color="green" />
              )}

              <Col className="col-9 text-start">
                <Row>
                  <Col className="">RUB/TRY</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.RUB.Buying}</Col>
                </Row>
                <Row>
                  {" "}
                  <Col className="fw-bold"> {currencyDaily.RUB.Change}</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      ) : null}
    </Container>
  );
}
