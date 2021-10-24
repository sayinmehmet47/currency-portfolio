import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Spinner } from "reactstrap";
import Home from "../pages/Home";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <Form className="mx-5 text-center mt-5" onSubmit={handleSubmit}>
        <h4 className="my-4">Search for Currency</h4>
        <FormGroup className="d-flex justify-content-center align-items-center mx-5">
          <Input
            type="text"
            className="search"
            style={{ maxWidth: "250px", marginRight: "10px" }}
            name="text"
            inline="true"
            id="search"
            placeholder="ALL-Albanian Lek"
            onChange={handleChangeInput}
          />

          {isLoading ? (
            <div>
              <Button type="submit" color="dark" className="" block>
                <Spinner children="" size="sm" color="light" /> Submit
              </Button>
            </div>
          ) : (
            <Button type="submit" color="dark" className="" block>
              Submit
            </Button>
          )}
        </FormGroup>
      </Form>
    </>
  );
};
