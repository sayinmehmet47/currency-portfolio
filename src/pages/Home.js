import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCurrencies } from "../store/Actions/currencyActions";
import { AppNavbar } from "../../src/components/AppNavbar";
import { PurchaseModal } from "../components/PurchaseModal";
import ReactSearchBox from "react-search-box";
import { PortfolioTable } from "../components/PortfolioTable";
import { getPortfolio } from "../store/Actions/portfolioActions";

export default function Home() {
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const userName = useSelector((state) => state.auth.user.name);
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
    }
  }, []);

  return (
    <div>
      {isLogin ? (
        <div>
          <AppNavbar />
          {/* <PurchaseModal ref={PurchaseModal} /> */}
          <div className="w-50 mx-auto">
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
