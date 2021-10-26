import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import { getCurrencyRate } from "../store/Actions/currencyActions";
import { getPortfolio } from "../store/Actions/portfolioActions";

export const PurchaseModal = (props) => {
  const { buttonLabel, className, selected } = props;

  const rate = useSelector((state) => state.codes.rates);
  const dispatch = useDispatch();
  const [clickedCurrency, setClickedCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [alertZero, setZeroAlert] = useState(false);
  const [alertHigh, setAlertHigh] = useState(false);
  const acronyms = useSelector((state) =>
    state.portfolioData.map((e) => e.acronym)
  );
  const user = useSelector((state) => state.auth.user.name);
  const portfolio = useSelector((state) => state.portfolioData);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (selected) {
      toggle();
    }
    dispatch(getCurrencyRate(selected, "USD"));
  }, [selected]);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const updatePortfolio = () => {
    console.log(portfolio);
    const copy = JSON.stringify(portfolio);
    const copyPortfolio = JSON.parse(copy);

    if (JSON.parse(amount) === 0) {
      setZeroAlert(true);
      setTimeout(() => {
        setZeroAlert(false);
      }, 5000);
      toggle();
    }

    const indexMain = copyPortfolio.findIndex(
      (e) => e.acronym === clickedCurrency
    );
    const indexSelected = copyPortfolio.findIndex(
      (e) => e.acronym === selected[0]
    );
    console.log(indexSelected);
    if (copyPortfolio[indexMain].totalAsset > JSON.parse(amount)) {
      copyPortfolio[indexMain].totalAsset =
        copyPortfolio[indexMain].totalAsset - JSON.parse(amount * rate);

      if (indexSelected >= 0) {
        copyPortfolio[indexSelected].totalAsset =
          copyPortfolio[indexSelected].totalAsset + JSON.parse(amount);
      } else if (JSON.parse(amount) !== 0) {
        copyPortfolio.push({
          acronym: selected[0],
          name: selected[1],
          totalAsset: JSON.parse(amount),
        });
      }
    } else {
      setAlertHigh(true);
      setTimeout(() => {
        setAlertHigh(false);
      }, 5000);
      toggle();
    }
    const localPortfolio = JSON.parse(localStorage.getItem(user));
    localStorage.setItem(
      user,
      JSON.stringify({
        ...localPortfolio,
        portfolio: copyPortfolio,
      })
    );
    dispatch(getPortfolio(user));
    console.log(copyPortfolio);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePortfolio();
  };

  const handleCurrency = (acronym) => {
    setClickedCurrency(acronym);
    dispatch(getCurrencyRate(selected, acronym));
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {alertZero ? (
          <Alert color="danger">You entered an invalid amount</Alert>
        ) : null}
        {alertHigh ? (
          <Alert color="warning">You entered high amount</Alert>
        ) : null}

        <ModalHeader toggle={toggle} className="text-center">
          {/* <Button color="primary">USD</Button>{" "} */}

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
              {selected[1]} to {clickedCurrency}
            </h5>
          </div>
        </ModalHeader>
        <ModalBody className="mx-5">
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
