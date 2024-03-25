import React from "react";
import Transactions from "./pages/Transaction";
import Chart from "./pages/Chart";
import Pie from "./pages/Pie";
import "./App.css";

const App = () => {
  return (
    <>
      <Transactions />
      <Chart />
      <Pie />
    </>
  );
};

export default App;
