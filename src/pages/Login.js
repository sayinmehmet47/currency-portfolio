import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Alert } from "reactstrap";
import { login } from "../store/Actions/AuthActions";

const Login = (props) => {
  const [logins, setLogins] = useState(false);
  const [attempt, setAttempt] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const handleChangeName = (e) => setName(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem(name));
    if (user) {
      dispatch(login(user));
      history.push("/");
    } else {
      setLogins(false);
      setAttempt(true);
      setTimeout(() => {
        setAttempt(false);
      }, 3000);
      // history.push('/register');
    }
  };
  return (
    <>
      {!logins && attempt ? (
        <Alert color="warning">Please register new account</Alert>
      ) : null}

      <Form
        className="w-50 mx-auto border border-secondary mt-5 p-5"
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
        </Button>{" "}
        <br />
        <Link className="float-start  py-3" to="/register">
          Register
        </Link>
      </Form>
    </>
  );
};

export default Login;
