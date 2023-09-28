import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, FormGroup, Input } from 'reactstrap';

interface ExchangeRateData {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: {
    [currencyCode: string]: number;
  };
}

export default function Converter() {
  const [unselected, setUnselected] = useState(['USD', 'EUR', 'CHF']);
  const [selected, setSelected] = useState('TRY');
  const [rates, setRates] = useState<ExchangeRateData>();
  const [input, setInput] = useState(0);
  const keys = ['TRY', 'USD', 'EUR', 'CHF'];

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setUnselected(keys.filter((element) => element !== e.target.value));
    setSelected(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(Number(e.target.value));
  };

  useEffect(() => {
    axios
      .get(
        ` https://v6.exchangerate-api.com/v6/858c938bf29b829232f96699/latest/${selected}`
      )
      .then((res) => {
        setRates(res.data);
      });
  }, [selected, input]);

  return (
    <div>
      <Card>
        <CardBody>
          <FormGroup>
            <CardTitle tag="p" className="bg-dark text-light p-2 rounded">
              EXCHANGE
            </CardTitle>

            <Input
              className=" mb-2"
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
            </Input>
          </FormGroup>
          <FormGroup className=" d-flex flex-column justify-content-center align-items-center container-fluid">
            {rates &&
              unselected?.map((element, index) => (
                <span key={index} className="border-bottom px-3">
                  {element}:
                  {(rates && rates.conversion_rates[element] * input).toFixed(
                    2
                  )}
                </span>
              ))}
          </FormGroup>
        </CardBody>
      </Card>
    </div>
  );
}
