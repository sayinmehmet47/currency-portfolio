import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
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
} from 'reactstrap';
import {
  clearRate,
  getCurrencyRate,
  sellCurrency,
  updateToCurrency,
} from '../store/Actions/currencyActions';
import { RootState } from '../store/store';

export const SellingModal = (props: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const fromCurrency = useSelector(
    (state: RootState) => state.codes.fromCurrency
  );
  const toCurrency = useSelector((state: RootState) => state.codes.toCurrency);
  const currentRate = useSelector((state: RootState) => state.codes.rates);

  const holdedCurrencies = useSelector((state: RootState) =>
    state.portfolioData.map((e) => e.acronym)
  );
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const toggle = () => {
    setModal(!modal);
    if (!amount) {
      setError(t('pleaseEnterAmount'));
      setModal(true);
      setTimeout(() => {
        setError('');
      }, 5000);
    } else if (!currentRate) {
      setError(t('pleaseSelectCurrency'));
      setModal(true);
      setTimeout(() => {
        setError('');
      }, 2000);
    } else {
      if (amount && currentRate) {
        dispatch(clearRate());
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amount && currentRate && currentRate !== 1) {
      dispatch(sellCurrency(JSON.parse(amount)));
    }
  };

  const handleUpdateToCurrency = (acronym: any) => {
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

        <h3 className="text-center bg-danger text-light py-2">{t('sell')}</h3>
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
                {t('amount')}
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
              {t('exchange')}
            </Button>{' '}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
