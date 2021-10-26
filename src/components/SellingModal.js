import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import { getCurrencyRate } from "../store/Actions/currencyActions";
import { getPortfolio } from "../store/Actions/portfolioActions";

export const SellingModal = (props) => {
  const dispatch = useDispatch();
  const { buttonLabel, className, selected } = props;
  const [clickedCurrency, setClickedCurrency] = useState("USD");
  const [alertZero, setZeroAlert] = useState(false);
  const [alertHigh, setAlertHigh] = useState(false);
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState("");
  const acronyms = useSelector((state) =>
    state.portfolioData.map((e) => e.acronym)
  );
  const name = useSelector((state) =>
    state.portfolioData.map((e) => e.acronym)
  );
  const portfolio = useSelector((state) => state.portfolioData);
  const rate = useSelector((state) => state.codes.rates);
  const user = useSelector((state) => state.auth.user.name);

  const toggle = () => setModal(!modal);
  const handleCurrency = (acronym) => {
    setClickedCurrency(acronym);
    dispatch(getCurrencyRate(selected, acronym));
  };

  const updatePortfolio = () => {
    const copy = JSON.stringify(portfolio);
    const copyPortfolio = JSON.parse(copy);

    if (JSON.parse(amount) === 0) {
      setZeroAlert(true);
      setTimeout(() => {
        setZeroAlert(false);
      }, 5000);
      toggle();
    }
    //////////////////////////////////////////
    console.log(clickedCurrency);
    console.log(selected);

    const localPortfolio = JSON.parse(localStorage.getItem(user));
    localStorage.setItem(
      user,
      JSON.stringify({
        ...localPortfolio,
        portfolio: copyPortfolio,
      })
    );
    dispatch(getPortfolio(user));
  };
  ////////////////////////////////
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePortfolio();
  };

  return (
    <div className="mx-2">
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          {alertZero ? (
            <Alert color="danger">You entered an invalid amount</Alert>
          ) : null}
          {alertHigh ? (
            <Alert color="warning">You entered high amount</Alert>
          ) : null}
          {acronyms.map((acronym, index) => {
            return (
              <Button
                key={index}
                className="m-1"
                onClick={() => handleCurrency(acronym)}
                color="success"
              >
                {acronym}
              </Button>
            );
          })}
          <div className="d-flex justify-content-between">
            <h5>
              {selected[0]} to {clickedCurrency}
            </h5>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <span>Rate:</span>
            <span className="text-danger mx-3 fs-4">{rate}</span>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="d-flex align-items-center">
              <Label for="exampleEmail" className="me-2">
                Amount
              </Label>
              <Input
                type="text"
                name="amount"
                id="exampleEmail"
                onChange={handleChange}
                placeholder="20"
              />
            </FormGroup>
            <Button
              type="submit"
              color="primary"
              className="mt-3"
              onClick={toggle}
            >
              Exchange
            </Button>{" "}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
