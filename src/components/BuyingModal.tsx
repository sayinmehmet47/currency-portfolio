import React, { ChangeEvent, useState } from 'react';
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
  buyCurrency,
  clearRate,
  getCurrencyRate,
  updateToCurrency,
} from '../store/Actions/currencyActions';
import { RootState } from '../store/store';

interface IBuyingProps {
  buttonLabel: string;
  className: string;
}

export const BuyingModal = ({ buttonLabel, className }: IBuyingProps) => {
  const dispatch = useDispatch();
  const fromCurrency = useSelector(
    (state: RootState) => state.codes.fromCurrency
  );
  const toCurrency = useSelector((state: RootState) => state.codes.toCurrency);
  const currentRate = useSelector((state: RootState) => state.codes.rates);
  const holdedCurrencies = useSelector((state: RootState) =>
    state.portfolioData.map((e) => e.acronym)
  );
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();

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

  const closeModal = () => {
    setModal(false);
    dispatch(clearRate());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amount && currentRate && currentRate !== 1) {
      dispatch(buyCurrency(JSON.parse(amount)));
    }
  };

  const handleUpdateToCurrency = (acronym: string) => {
    dispatch(updateToCurrency(acronym));
    dispatch(getCurrencyRate());
  };

  return (
    <div className="mx-2">
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        {error ? <Alert color="warning">{error}</Alert> : null}
        <h3 className="text-center bg-success py-1 text-light">{t('buy')}</h3>

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
