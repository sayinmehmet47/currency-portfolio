import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppNavbar } from "../../src/components/AppNavbar";
import { PurchaseModal } from "../components/PurchaseModal";

import { useNavigate } from "react-router-dom";

import {
  getPortfolio,
  getTotalAssets,
} from "../store/Actions/portfolioActions";
import { Alert } from "reactstrap";
import { getCurrencies } from "../store/Actions/currencyActions";
import MyTabs from "../components/MyTabs";
import SearchingComponent from "../components/SearchingComponent";

export default function Home() {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const userName = useSelector((state) => state.auth.user.name);
  const lastUpdated = useSelector((state) => state.codes.date);
  const totalAssets = useSelector((state) => state.totalAssets);
  const error = useSelector((state) => state.codes.error);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const data = useSelector((state) =>
    state.codes.data.map((e) => {
      return { key: e[0], value: `${e[0]}-${e[1]}` };
    })
  );

  const handleSelection = (e) => {
    setSelectedCurrency(e.item.key);
  };

  useEffect(() => {
    if (isLogin) {
      dispatch(getPortfolio());
      dispatch(getCurrencies());
      dispatch(getTotalAssets(userName));
    }
  }, [userName]);

  return (
    <div className="home">
      {isLogin ? (
        <div>
          <AppNavbar />
          {error ? <Alert color="warning">{error}</Alert> : ""}

          <div className="d-flex justify-content-center align-items-center">
            <h2>TotalAssets:{totalAssets}$</h2>
          </div>

          <div className="w-50 mx-auto mt-5">
            <PurchaseModal selected={selectedCurrency} />
            <SearchingComponent selection={(q) => setSelectedCurrency(q)} />
          </div>
          <MyTabs />
          <div className="mt-5">
            <span style={{ color: "red" }}>Last Updated: </span>
            <span className="pb-5">{lastUpdated}</span>
          </div>
        </div>
      ) : (
        navigate("/mainpage")
      )}
    </div>
  );
}
