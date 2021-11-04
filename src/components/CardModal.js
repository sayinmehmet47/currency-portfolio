import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function CardModal() {
  return (
    <div>
      <Card className="shadow border bordered m-3 p-3">
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button className="btn btn-primary">Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
