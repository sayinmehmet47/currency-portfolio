import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import DoughnutChart from "./Doughnut";
import { PortfolioTable } from "./PortfolioTable";

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
            style={{ cursor: "pointer" }}
          >
            {t("table")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active " : ""}
            onClick={() => setActiveTab("2")}
            style={{ cursor: "pointer" }}
          >
            {t("charts")}
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
