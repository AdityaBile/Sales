import React from "react";
import "./../css/transaction.css";

const Transaction = () => {
  return (
    <div className="transaction-container">
      <h1 className="transaction-title">Transaction Dashboard</h1>
      <form>
        <div className="search-container">
          <input className="search-input" placeholder="Search Transaction" />
          <select className="month-select">
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
              <th>category</th>
              <th>image</th>
              <th>sold</th>
              <th>dateOfSale</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <div className="pagination-container">
          <p>Page No. 1</p>
          <button>Next</button>
          <button>Previous</button>
          <p>Per Page : 10</p>
        </div>
      </form>
    </div>
  );
};

export default Transaction;
