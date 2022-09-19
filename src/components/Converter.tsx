import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, FormGroup, Input } from 'reactstrap';

export default function Converter() {
  const [unselected, setUnselected] = useState(['USD', 'EUR', 'CHF', 'XAU']);
  const [rates, setRates] = useState<any>([]);
  const [selected, setSelected] = useState('TRY');
  const [input, setInput] = useState(0);
  const keys = ['TRY', 'USD', 'EUR', 'CHF', 'XAU'];

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setUnselected(keys.filter((element) => element !== e.target.value));
    setSelected(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(Number(e.target.value));
  };

  useEffect(() => {
    axios
      .get(`https://api.exchangerate.host/latest?base=${selected}`)
      .then((res) => {
        setRates(res.data.rates);
      });
  }, [selected, input]);

  return (
    <div className="me-2 ms-1 ">
      <Card>
        <CardBody className="d-flex justify-content-center">
          <FormGroup>
            <CardTitle tag="p" className="bg-dark text-light p-2 rounded">
              EXCHANGE
            </CardTitle>

            <Input
              className="form-select mb-2"
              id="exampleSelect"
              name="select"
              type="number"
              onChange={(e) => handleChange(e)}
            ></Input>

            <Input
              className="form-select mt-3"
              id="exampleSelect"
              name="select"
              type="select"
              onChange={(e) => handleSelect(e)}
            >
              <option>TRY</option>
              <option>USD</option>
              <option>EUR</option>
              <option>CHF</option>
              <option>XAU</option>
            </Input>
          </FormGroup>
          <FormGroup className=" d-flex flex-column justify-content-center align-items-center container-fluid">
            {unselected.map((element, index) => (
              <span key={index} className="border-bottom px-3">
                {element}:{(rates[element] * input).toFixed(2)}
              </span>
            ))}
          </FormGroup>
        </CardBody>
      </Card>
    </div>
  );
}
