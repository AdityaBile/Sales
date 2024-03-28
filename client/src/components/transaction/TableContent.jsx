import React, { useState, useEffect } from "react";
import "../../css/transaction/TableContent.css";
import axios from "axios";

const TableContent = () => {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/transactions")
      .then((response) => setTableData(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Pagination
  // currentPage -> tableData
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = tableData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(tableData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const changeCurrPage = (num) => {
    setCurrentPage(num);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

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
          {records.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.price}</td>
              <td>{data.description}</td>
              <td>{data.category}</td>
              <td className="product_Img">
                <img src={data.image} alt={data.title} />
              </td>
              <td>{data.sold ? "Yes" : "No"}</td>
              <td>{data.dateOfSale}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <ul>
          {/* Page Number  */}
          {numbers.map((num, idx) => (
            <li className="page_item" key={idx}>
              <a
                onClick={() => changeCurrPage(num)}
                style={{ display: currentPage === num ? "block" : "none" }}
              >
                Page No. : {num}
              </a>
            </li>
          ))}

          {/* Previous Page  */}
          <li className="page_item">
            <button onClick={prevPage}>Prev</button>
          </li>

          {/* Next Page  */}
          <li className="page_item">
            <button onClick={nextPage}>Next</button>
          </li>

          {/* Total records  */}
          <li className="page_item">
            <a>Per Page : {recordsPerPage}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TableContent;
