import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Lookup } from "react-rainbow-components";
import { useSelector } from "react-redux";

export default function SearchingComponent({ selection }) {
  const [state, setState] = useState({ options: null });
  console.log(state);

  useEffect(() => {
    selection(state.option ? state.option.label : null);
  }, [state]);

  const IconStyles = {
    height: 30,
    width: 50,
    backgroundColor: "#01b6f5",
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };
  const containerStyles = {
    maxWidth: 700,
  };
  const data = useSelector((state) =>
    state.codes.data.map((e) => {
      return {
        label: e[0],
        description: `${e[0]}-${e[1]}`,
        icon: (
          <span style={IconStyles}>
            {" "}
            <FontAwesomeIcon icon={faMoneyBill} />{" "}
          </span>
        ),
      };
    })
  );

  function filter(query, options) {
    if (query) {
      return options.filter((item) => {
        const regex = new RegExp(query, "i");
        return regex.test(item.label);
      });
    }
    return [];
  }

  function search(value) {
    if (state.options && state.value && value.length > state.value.length) {
      setState({
        options: filter(value, state.options),
        value,
      });
    } else if (value) {
      setState({
        isLoading: true,
        value,
      });
      setTimeout(
        () =>
          setState({
            options: filter(value, data),
            isLoading: false,
          }),
        500
      );
    } else {
      setState({
        isLoading: false,
        value: "",
        options: null,
      });
    }
  }
  return (
    <div>
      <Lookup
        id="lookup-1"
        label="Buy Currency"
        placeholder="TRY"
        options={state.options}
        value={state.option}
        onChange={(option) => setState({ option })}
        onSearch={search}
        style={containerStyles}
        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        isLoading={state.isLoading}
        size="medium"
      />
    </div>
  );
}
