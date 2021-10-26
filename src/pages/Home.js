import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCurrencies } from "../store/Actions/currencyActions";
import { AppNavbar } from "../../src/components/AppNavbar";
import { PurchaseModal } from "../components/PurchaseModal";
import ReactSearchBox from "react-search-box";
import { PortfolioTable } from "../components/PortfolioTable";
import { MdMonetizationOn } from "react-icons/md";
import {
  getPortfolio,
  getTotalAssets,
} from "../store/Actions/portfolioActions";

export default function Home() {
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const userName = useSelector((state) => state.auth.user.name);
  const portfolio = useSelector((state) => state.portfolioData);
  const totalAssets = useSelector((state) => state.totalAssets);

  const [selectedCurrency, setSelectedCurrency] = useState("");

  const data = useSelector((state) =>
    state.codes.data.map((e) => {
      return { key: e[0], value: `${e[0]}-${e[1]}` };
    })
  );

  const handleSelection = (e) => {
    setSelectedCurrency([e.item.key, e.item.value]);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());

    if (isLogin) {
      dispatch(getPortfolio(userName));
      dispatch(getTotalAssets(userName));
    }
  }, []);

  return (
    <div>
      {isLogin ? (
        <div>
          <AppNavbar />
          <div className="d-flex justify-content-center align-items-center">
            <h2>TotalAssets:{totalAssets}</h2>
            <MdMonetizationOn size={30} />
          </div>

          <div className="w-50 mx-auto mt-5">
            <ReactSearchBox
              placeholder="Search for currency"
              onSelect={handleSelection}
              value="Doe"
              data={data}
              callback={(/** @type {any} */ record) => console.log(record)}
            />{" "}
            <PurchaseModal selected={selectedCurrency} />
          </div>
          <PortfolioTable />
        </div>
      ) : (
        history.push("/login")
      )}
    </div>
  );
}
