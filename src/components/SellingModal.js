import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import {
  clearRate,
  getCurrencyRate,
  sellCurrency,
  updateToCurrency,
} from "../store/Actions/currencyActions";

export const SellingModal = (props) => {
  const dispatch = useDispatch();
  const fromCurrency = useSelector((state) => state.codes.fromCurrency);
  const toCurrency = useSelector((state) => state.codes.toCurrency);
  const currentRate = useSelector((state) => state.codes.rates);

  const holdedCurrencies = useSelector((state) =>
    state.portfolioData.map((e) => e.acronym)
  );
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const toggle = () => {
    setModal(!modal);
    if (!amount) {
      setError("please enter an amount");
      setModal(true);
      setTimeout(() => {
        setError("");
      }, 5000);
    } else if (!currentRate) {
      setError("please select a currency");
      setModal(true);
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      if (amount && currentRate) {
        dispatch(clearRate());
      }
    }
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && currentRate && currentRate !== 1) {
      dispatch(sellCurrency(JSON.parse(amount)));
    }
  };

  const handleUpdateToCurrency = (acronym) => {
    dispatch(updateToCurrency(acronym));
    dispatch(getCurrencyRate());
  };
  return (
    <div className="mx-2">
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {error ? <Alert color="warning">{error}</Alert> : null}

        <h3 className="text-center bg-danger text-light py-2">Sell</h3>
        <div className="d-flex">
          {holdedCurrencies.map((acronym, index) => {
            return (
              <Button
                key={index}
                className="m-1"
                onClick={() => handleUpdateToCurrency(acronym)}
                color="success"
              >
                {acronym}
              </Button>
            );
          })}
        </div>

        <ModalHeader toggle={() => setModal(false)}>
          <div className="d-flex justify-content-between">
            <h5>
              {fromCurrency} to {toCurrency}
            </h5>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <span>Rate:</span>
            <span className="text-danger mx-3 fs-4">{currentRate}</span>
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
