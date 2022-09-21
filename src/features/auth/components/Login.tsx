import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Alert } from 'reactstrap';
import { login } from '../../../store/Actions/AuthActions';
import Logo from '../../../images/logo-black.png';
import { useNavigate } from 'react-router';
import { TopBanner } from '../../../shared/styles/TopBanner.elements';

const testAccount = {
  name: 'testAccount',
  surname: 'test',
  portfolio: [
    {
      acronym: 'USD',
      name: 'United States Dollar',
      totalAsset: 1000,
    },
  ],
  totalAsset: 1000,
};

const Login = () => {
  const [logins, setLogins] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(name) as string);
    if (user) {
      dispatch(login(user));
      navigate('/dashboard');
    } else if (name === 'testAccount') {
      localStorage.setItem('testAccount', JSON.stringify(testAccount));
      dispatch(login(testAccount));
      navigate('/dasboard');
    } else {
      setLogins(false);
      setAttempt(true);
      setTimeout(() => {
        setAttempt(false);
      }, 3000);
    }
  };
  return (
    <TopBanner>
      <img
        src={Logo}
        style={{ position: 'absolute', top: '10px', left: '5px' }}
        className="m-3"
        alt="fdf"
        width={80}
        height={80}
      />
      <Form
        className="d-flex flex-column border bordered w-50 mx-auto p-5 shadow-lg  justify-content-center "
        onSubmit={handleOnSubmit}
      >
        {!logins && attempt ? (
          <Alert color="warning">Please register new account</Alert>
        ) : null}
        <h1>Login</h1>
        <hr />
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Account name
          </Label>

          <Input
            type="text"
            name="name"
            id="exampleName"
            placeholder="login with `testAccount`"
            onChange={handleChangeName}
          />
        </FormGroup>
        <div className="d-grid gap-2">
          <Button color="success" className=" mt-4" type="submit">
            Login
          </Button>
        </div>
        <br />
        <Link className="float-start  py-3" to="/register">
          Register
        </Link>
      </Form>
    </TopBanner>
  );
};

export default Login;
