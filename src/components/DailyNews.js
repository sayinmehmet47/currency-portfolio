import Button from "@restart/ui/esm/Button";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Row,
} from "reactstrap";
import { currencyNews } from "../store/Actions/currencyActions";

export default function DailyNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currencyNews(10));
  }, []);

  return (
    <div className="container">
      <h2 class="TrendingNow-heading">Trending Now</h2>
      <Row lg={9} md={3} className="d-flex justify-content-center">
        <Card className="m-2">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card className="m-2">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card className="m-2">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card className="m-2">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
}
