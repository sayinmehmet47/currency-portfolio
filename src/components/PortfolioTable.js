import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTable, useSortBy, usePagination } from "react-table";

export const PortfolioTable = () => {
  const portfolio = useSelector((state) => state.portfolioData);
  const data = useMemo(() => [...portfolio], [portfolio]);
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
        accessor: "totalAsset",
      },
      {
        width: 300,
        Header: "Trade",
        Cell: ({ cell }) => (
          <div>
            <button className="btn btn-success m-1" value="fdf">
              BUY
            </button>
            <button className="btn btn-danger m-1" value="fdf">
              SELL
            </button>
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
    nextPage,
    previousPage,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
  } = useTable({ columns, data }, useSortBy, usePagination);
  return (
    <div className="d-flex flex-column mb-5 mt-5 mx-5">
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
              <tr {...row.getRowProps()}>
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
      {/* <div className="mt-2 d-flex justify-content-center">
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          ⬅ Previous
        </button>
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          NextPage ➡
        </button>
      </div> */}
    </div>
  );
};
