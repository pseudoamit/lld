import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [productDetails, setProductDetails] = useState({});
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [paginationDetails, setPaginationDetails] = useState({
    skip: 0,
    activePage: 1,
  });
  const [limit, setLimit] = useState(5);

  const fetchProductDetails = async () => {
    const result = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${paginationDetails?.skip}&select=title,price,category,rating,stock`
    );
    const res = await result.json();
    setProductDetails(res);
    setNumberOfPages(Math.ceil(res?.total / limit));
  };

  useEffect(() => {
    fetchProductDetails();
  }, [paginationDetails, limit]);

  const limitChangeHandler = (e) => {
    setLimit(e?.target?.value);
    setPaginationDetails((prev) => ({
      ...prev,
      skip: 0,
      activePage: 1,
    }));
  };

  const changePageHandler = (pageIndex) => {
    setPaginationDetails((prevState) => ({
      ...prevState,
      activePage: pageIndex,
      skip: (pageIndex - 1) * limit,
    }));
  };

  const nextPageHandler = () => {
    if (paginationDetails?.activePage === Math.floor(numberOfPages)) {
      setPaginationDetails((prevState) => ({
        ...prevState,
        skip: 0,
        activePage: 1,
      }));
    } else {
      setPaginationDetails((prevState) => ({
        ...prevState,
        skip: prevState.skip + limit,
        activePage: prevState.activePage + 1,
      }));
    }
  };

  const previousPageHandler = () => {
    if (paginationDetails?.activePage === 1) {
      setPaginationDetails((prevState) => ({
        ...prevState,
        skip: (Math.floor(numberOfPages) - 1) * limit,
        activePage: Math.floor(numberOfPages),
      }));
    } else {
      setPaginationDetails((prevState) => ({
        ...prevState,
        skip: Math.max(prevState.skip - limit, 0),
        activePage: Math.max(prevState.activePage - 1, 1),
      }));
    }
  };

  return (
    <>
      <div className="table-wrapper">
        <div className="table-body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {productDetails?.products?.length > 0 &&
                productDetails?.products?.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry?.id}</td>
                    <td>{entry?.title}</td>
                    <td>{entry?.price}</td>
                    <td>{entry?.category}</td>
                    <td>{entry?.rating}</td>
                    <td>{entry?.stock}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-section">
          <span onClick={previousPageHandler}>prev</span>
          <ul className="page-number-wrapper">
            {/* {Array.from({ length: numberOfPages }, (_, i) => (
              <li key={i + 1} onClick={() => changePageHandler(i + 1)}>
                {i + 1}
              </li>
            ))} */}
            {[...Array(numberOfPages).keys()].map((entry, index) => (
              <li
                className={
                  paginationDetails?.activePage === index + 1
                    ? "active-page"
                    : ""
                }
                key={index + 1}
                onClick={() => changePageHandler(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <span onClick={nextPageHandler}>next</span>
          <div className="per-page-dropdown-selector">
            <select defaultValue={limit} onChange={limitChangeHandler}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
