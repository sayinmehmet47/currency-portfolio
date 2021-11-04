import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy, usePagination } from "react-table";
import { updateFromCurrency } from "../store/Actions/currencyActions";
import { BuyingModal } from "./BuyingModal";
import { SellingModal } from "./SellingModal";

export const PortfolioTable = () => {
  const portfolio = useSelector((state) => state.portfolioData);
  const dispatch = useDispatch();
  const [fromCurrency, setFromCurrency] = useState("");
  const data = useMemo(() => [...portfolio], [portfolio]);

  useEffect(() => {
    dispatch(updateFromCurrency(fromCurrency));
  }, [fromCurrency]);

  const columns = useMemo(
    () => [
      {
        Header: "Acronym",
        accessor: "acronym", // accessor is the "key" in the data
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Amount",
        accessor: (d) => d.totalAsset.toFixed(3),
      },
      {
        width: 300,
        Header: "Trade",
        Cell: ({ row }) => (
          <div className="d-flex justify-content-center">
            <BuyingModal
              buttonLabel="Buy"
              selected={[row.original.acronym, row.original.name]}
            />
            <SellingModal buttonLabel="Sell" />
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,

    prepareRow,
    page,
  } = useTable({ columns, data }, useSortBy, usePagination);
  return (
    <div className="d-flex flex-column mb-5 mt-5 mx-5 shadow">
      <table {...getTableProps()} style={{ borderRadius: "15px" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="border"
                  style={{
                    background: "#f3f4f6",
                    color: "black",
                    paddingLeft: "12px",
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => setFromCurrency(row.original.acronym)}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border py-2 "
                      style={{
                        textDecorationLine: "none",
                        paddingLeft: "7px",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
