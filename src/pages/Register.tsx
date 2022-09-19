import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';

import { register } from '../store/Actions/AuthActions';
import { TopBanner } from './Login.elements';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [error, setError] = useState('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSurname(e.target.value);
  let navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      name,
      surname,
      portfolio: [
        { acronym: 'USD', name: 'United States Dollar', totalAsset: 1000 },
      ],
    };

    if (JSON.parse(localStorage.getItem(user.name) || '')) {
      setError('This account already exists');
      setTimeout(() => {
        setError('');
      }, 3000);
    } else if (user.name === '') {
      setError('Please enter an account');
      setTimeout(() => {
        setError('');
      }, 3000);
    } else {
      dispatch(register(user));
      localStorage.setItem(user.name, JSON.stringify(user));
      navigate('/');
    }
  };

  return (
    <>
      <TopBanner>
        <Form
          className="w-50 mx-auto border bordered p-5 shadow-lg"
          onSubmit={handleOnSubmit}
        >
          {error ? <Alert color="warning">{error}</Alert> : null}
          <h1>Register</h1>
          <hr />
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              id="exampleName"
              placeholder="john"
              onChange={handleChangeName}
            />
            <Label for="name" className="mr-sm-2">
              Surname
            </Label>
            <Input
              type="text"
              name="name"
              id="exampleSurname"
              placeholder="doe"
              onChange={handleChangeSurname}
            />
            <div className="d-grid gap-2">
              <Button color="success" className=" mt-4">
                Register
              </Button>
            </div>
          </FormGroup>
        </Form>
      </TopBanner>
    </>
  );
}
