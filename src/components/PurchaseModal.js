import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import ReactSearchBox from "react-search-box";
import { useSelector } from "react-redux";

export const PurchaseModal = (props) => {
  const { buttonLabel, className, selected } = props;

  const data = useSelector((state) =>
    state.data.data.map((e) => {
      return { key: e[0], value: `${e[0]}-${e[1]}` };
    })
  );

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (selected) {
      toggle();
    }
  }, [selected]);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-center">
          <div className="d-flex justify-content-between">
            <h3>{selected}-</h3>
            <ReactSearchBox
              placeholder="Search for currency"
              // onSelect={handleSelection}
              value="Doe"
              data={data}
              callback={(/** @type {any} */ record) => console.log(record)}
            />
          </div>
        </ModalHeader>
        <ModalBody className="mx-5">
          <span>Rate:</span>
          <FormGroup className="d-flex align-items-center">
            <Label for="exampleEmail" className="me-2">
              Amount
            </Label>
            <Input
              type="text"
              name="amount"
              id="exampleEmail"
              placeholder="20"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Exchange
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};
