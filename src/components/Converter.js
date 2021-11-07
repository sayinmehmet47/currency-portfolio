import React from "react";

export default function Converter() {
  return (
    <div className="">
      <iframe
        title="converter"
        height="375"
        width="197"
        className="shadow"
        src="https://ssltools.investing.com/currency-converter/index.php?from=17&to=12&force_lang=1"
      ></iframe>
      <br />
      <table width="297">
        <tr>
          <td>
            <span
              style={{
                fontSize: "11px",
                color: "#333333",
                textDecoration: "none",
              }}
            ></span>
          </td>
        </tr>
      </table>
    </div>
  );
}
