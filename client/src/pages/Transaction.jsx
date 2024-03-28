import React from "react";
import "../css/Transaction.css";
import DropMonth from "../components/transaction/DropMonth";
import TableContent from "../components/transaction/TableContent";
import Searchbar from "../components/transaction/Searchbar";
import TableHeading from "../components/transaction/TableHeading";

const Transaction = () => {
  return (
    <div className="transaction-container">
      <form>
        <TableHeading />
        <div className="search-container">
          <Searchbar />
          <DropMonth />
        </div>
        <TableContent />
      </form>
    </div>
  );
};

export default Transaction;
