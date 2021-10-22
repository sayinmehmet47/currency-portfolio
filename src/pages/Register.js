import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { register } from '../store/Actions/AuthAcrtions';

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeSurname = (e) => setSurname(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const user = {
      name,
      surname,
      balance: 1000,
    };

    // Attempt to login
    dispatch(register(user));
    localStorage.setItem(user.name, JSON.stringify(user));
    history.push('/');
  };

  return (
    <div>
      <Form
        className="w-50 mx-auto border border-secondary mt-5 p-4"
        onSubmit={handleOnSubmit}
      >
        <h1>Register</h1>
        <hr />
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Name
          </Label>
          <Input
            type="name"
            name="name"
            id="exampleName"
            placeholder="john"
            onChange={handleChangeName}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="name" className="mr-sm-2">
            Surname
          </Label>
          <Input
            type="name"
            name="name"
            id="exampleSurname"
            placeholder="doe"
            onChange={handleChangeSurname}
          />
        </FormGroup>
        <Button color="success" className="px-5 mt-5">
          Register
        </Button>
      </Form>
    </div>
  );
}
