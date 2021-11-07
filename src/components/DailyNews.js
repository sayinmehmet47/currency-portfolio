import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currencyNews } from "../store/Actions/currencyActions";

export default function DailyNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currencyNews(10));
  }, []);

  return (
    <div className="container ms-3">
      <h2 class="TrendingNow-heading">Trending Now</h2>
    </div>
  );
}
