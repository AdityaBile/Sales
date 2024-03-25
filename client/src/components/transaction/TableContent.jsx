import React, { useState, useEffect } from "react";
import axios from "axios";

const TableContent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/transactions")
      .then((response) => setTableData(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
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
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td>{data.image}</td>
              <td>{data.sold ? "Yes" : "No"}</td>
              <td>{data.dateOfSale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableContent;
