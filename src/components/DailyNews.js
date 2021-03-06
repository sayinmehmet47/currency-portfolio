import Button from "@restart/ui/esm/Button";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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
  const news = useSelector((state) => state.newsDaily.news);
  useEffect(() => {
    dispatch(currencyNews(12));
  }, []);

  return (
    <div className="container">
      <h2 className="TrendingNow-heading">Trending Now</h2>
      <Row lg={4} md={3} className="d-flex justify-content-center">
        {news
          ? news.map((e, index) => {
              return (
                <Card className="m-2 shadow rounded" key={index}>
                  <CardImg
                    alt="Card image cap"
                    src={e.promoImage.url}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {e.headline}
                    </CardSubtitle>
                    <CardText>{e.description}</CardText>
                  </CardBody>
                </Card>
              );
            })
          : null}
      </Row>
    </div>
  );
}
