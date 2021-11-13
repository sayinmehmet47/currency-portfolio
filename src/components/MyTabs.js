import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import DoughnutChart from "./Doughnut";
import { PortfolioTable } from "./PortfolioTable";

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
            style={{ cursor: "pointer" }}
          >
            Table
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active " : ""}
            onClick={() => setActiveTab("2")}
            style={{ cursor: "pointer" }}
          >
            Charts
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          {" "}
          <PortfolioTable />
        </TabPane>
        <TabPane tabId="2">
          <DoughnutChart />
        </TabPane>
      </TabContent>
    </div>
  );
}
