import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCurrencies } from "../store/Actions/currencyActions";
import { AppNavbar } from "../../src/components/AppNavbar";
import { PurchaseModal } from "../components/PurchaseModal";
import ReactSearchBox from "react-search-box";

export default function Home(props) {
  console.log(props);
  const history = useHistory();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const data = useSelector((state) =>
    state.data.data.map((e) => {
      return { key: e[0], value: `${e[0]}-${e[1]}` };
    })
  );

  const handleSelection = (e) => {
    console.log(e.item.key);
    setSelectedCurrency(e.item.key);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrencies());
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
        </div>
      ) : (
        history.push("/login")
      )}
    </div>
  );
}
