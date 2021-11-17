import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import { Input } from "reactstrap";
import { updateFromCurrency } from "../store/Actions/currencyActions";
import { BuyingModal } from "./BuyingModal";
import { IndeterminateCheckbox } from "./Checkbox";
import { SellingModal } from "./SellingModal";

export const PortfolioTable = () => {
  const portfolio = useSelector((state) => state.portfolioData);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [fromCurrency, setFromCurrency] = useState("");
  const data = useMemo(() => [...portfolio], [portfolio]);
  // const Acronym = t("acronym");
  // const Amount = t("amount");

  useEffect(() => {
    dispatch(updateFromCurrency(fromCurrency));
  }, [fromCurrency]);

  const setCurrency = (ancronym) => {
    setFromCurrency(ancronym);
  };
  const toggleAllRowsSelected = (e) => {
    console.log(e);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Acronym",
        accessor: "acronym",
        disableSortBy: true,
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: t("amount"),
        accessor: (d) => d.totalAsset.toFixed(3),
      },
      {
        width: 100,
        Header: t("trade"),
        Cell: ({ row }) =>
          row.isSelected ? (
            <div className="d-flex justify-content-center">
              <BuyingModal
                buttonLabel="Buy"
                selected={[row.original.acronym, row.original.name]}
              />
              <SellingModal buttonLabel="Sell" />
            </div>
          ) : (
            <div>
              <button className="btn btn-success mx-1">{t("buy")}</button>
              <button className="btn btn-danger mx-1">{t("sell")}</button>
            </div>
          ),
      },
    ],
    [t]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    { columns, data },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox
                {...row.getToggleRowSelectedProps()}
                onClick={(e) => toggleAllRowsSelected(e)}
              />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  return (
    <div className="d-flex flex-column mb-5 mt-5 ms-3 me-4 shadow">
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
                onClick={() => setCurrency(row.original.acronym)}
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
