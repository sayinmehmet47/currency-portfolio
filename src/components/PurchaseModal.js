import React, { useEffect, useState } from "react";
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
  buyCurrencyFromList,
  clearRate,
  getCurrencyRate,
  updateFromCurrency,
  updateToCurrency,
} from "../store/Actions/currencyActions";

export const PurchaseModal = (props) => {
  const dispatch = useDispatch();
  const fromCurrency = useSelector((state) => state.codes.fromCurrency);
  const toCurrency = useSelector((state) => state.codes.toCurrency);
  const currentRate = useSelector((state) => state.codes.rates);
  const holdedCurrencies = useSelector((state) =>
    state.portfolioData.map((e) => e.acronym)
  );
  const { className, selected } = props;
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (selected) {
      setModal(true);
      dispatch(updateToCurrency(selected));
      dispatch(updateFromCurrency("USD"));
      dispatch(getCurrencyRate());
    }
  }, [selected]);

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
  const closeModal = () => {
    setModal(false);
    dispatch(clearRate());
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount && currentRate && currentRate !== 1) {
      dispatch(buyCurrencyFromList(JSON.parse(amount)));
      setAmount("");
    }
  };

  const handleUpdateToCurrency = (acronym) => {
    dispatch(updateFromCurrency(acronym));
    dispatch(getCurrencyRate());
  };

  return (
    <div className="mx-2">
      <Modal isOpen={modal} className={className}>
        {error ? <Alert color="warning">{error}</Alert> : null}

        <ModalHeader toggle={closeModal}>
          <div className="d-flex">
            {holdedCurrencies.map((acronym, index) => {
              return (
                <Button
                  key={index}
                  className="me-1"
                  onClick={() => handleUpdateToCurrency(acronym)}
                  color="success"
                >
                  {acronym}
                </Button>
              );
            })}
          </div>
        </ModalHeader>
        <ModalBody>
          <h5>
            {fromCurrency} to {toCurrency}
          </h5>
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
              onClick={toggle}
              type="submit"
              color="primary"
              className="mt-3"
            >
              Exchange
            </Button>{" "}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
