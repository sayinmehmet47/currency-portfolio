import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppNavbar } from "../../src/components/AppNavbar";
import { PurchaseModal } from "../components/PurchaseModal";
import ReactSearchBox from "react-search-box";
import { PortfolioTable } from "../components/PortfolioTable";
import { FcSearch } from "react-icons/fc";
import {
  getPortfolio,
  getTotalAssets,
} from "../store/Actions/portfolioActions";
import { Alert } from "reactstrap";
import { getCurrencies } from "../store/Actions/currencyActions";

export default function Home() {
  const history = useHistory();
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
    <div class="home">
      {isLogin ? (
        <div>
          <AppNavbar />
          {error ? <Alert color="warning">{error}</Alert> : ""}

          <div className="d-flex justify-content-center align-items-center">
            <h2>TotalAssets:{totalAssets}$</h2>
          </div>

          <div className="w-50 mx-auto mt-5">
            <ReactSearchBox
              placeholder="Search for currency"
              onSelect={handleSelection}
              leftIcon={<FcSearch />}
              iconBoxSize="48px"
              value="Doe"
              data={data}
              callback={(/** @type {any} */ record) => console.log(record)}
            />{" "}
            <PurchaseModal selected={selectedCurrency} />
          </div>
          <PortfolioTable />
          <span style={{ color: "red" }}>Last Updated: </span>
          <span className="pb-5">{lastUpdated}</span>
        </div>
      ) : (
        history.push("/mainpage")
      )}
    </div>
  );
}
