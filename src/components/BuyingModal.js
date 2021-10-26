import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getCurrencyRate } from "../store/Actions/currencyActions";

export const BuyingModal = (props) => {
  const { buttonLabel, className, selected } = props;
  const [clickedCurrency, setClickedCurrency] = useState("USD");
  const dispatch = useDispatch();
  const acronyms = useSelector((state) =>
    state.portfolioData.map((e) => e.acronym)
  );
  const rate = useSelector((state) => state.codes.rates);

  //   console.log(selected);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(selected);
  const handleCurrency = (acronym) => {
    setClickedCurrency(acronym);
    dispatch(getCurrencyRate(selected, acronym));
  };

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
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
              {clickedCurrency} to {selected[0]}
            </h5>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <span>Rate:</span>
            <span className="text-danger mx-3 fs-4">
              {Number((1 / rate).toFixed(4))}
            </span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
