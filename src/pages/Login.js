import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { login } from '../store/Actions/AuthAcrtions';

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const handleChangeName = (e) => setName(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(name));
    if (user) {
      dispatch(login(user));
      history.push('/');
    } else {
      history.push('/register');
    }
  };
  return (
    <Form
      className="w-50 mx-auto border border-secondary mt-5 p-4"
      onSubmit={handleOnSubmit}
    >
      <h1>Login</h1>
      <hr />
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">
          Account name
        </Label>
        <Input
          type="name"
          name="name"
          id="exampleName"
          placeholder="john"
          onChange={handleChangeName}
        />
      </FormGroup>
      <Button color="danger" className="px-5 mt-5">
        Login
      </Button>
    </Form>
  );
};

export default Login;
