import React from "react";
import "./../css/transaction.css";
import DropMonth from "../components/transaction/DropMonth";
import TableContent from "../components/transaction/TableContent";
import PageNavigate from "../components/transaction/PageNavigate";
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
        <PageNavigate />
      </form>
    </div>
  );
};

export default Transaction;
