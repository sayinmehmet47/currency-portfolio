import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AuthForm = () => {
  return (
    <Form className="w-50 mx-auto border border-secondary mt-5 p-4">
      <h1>Login</h1>
      <hr />
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">
          Name
        </Label>
        <Input type="time" name="name" id="exampleName" placeholder="john" />
      </FormGroup>
      <Button color="danger" className="px-5 mt-5">
        Login
      </Button>
    </Form>
  );
};

export default AuthForm;
