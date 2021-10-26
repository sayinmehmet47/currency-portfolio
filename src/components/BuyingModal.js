import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const BuyingModal = (props) => {
  const { buttonLabel, className, selected } = props;
  const [clickedCurrency, setClickedCurrency] = useState("USD");
  const acronyms = useSelector((state) =>
    state.portfolioData.map((e) => e.acronym)
  );
  //   console.log(selected);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleCurrency = (acronym) => {
    setClickedCurrency(acronym);
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
            <span className="text-danger mx-3 fs-4">fs</span>
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
