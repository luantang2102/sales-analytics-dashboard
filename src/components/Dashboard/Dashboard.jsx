import React from "react";
import "./Dashboard.css"
import Cards from "../Dashboard/Cards/Cards";
import Table from "../Dashboard/Table/Table";

function Dashboard() {

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <Cards/>
      <Table/>
    </div>
  );
}

export default Dashboard;