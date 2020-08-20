import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = (props) => {
  const { pageSize, itemCount, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount == 1) return null;
  const pages = _.range(1, pageCount + 1);

  console.log(pages);
  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {pages.map((page) => (
            <li
              key={page}
              class={currentPage === page ? "page-item active" : "page-item"}
            >
              <a class="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};
Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Pagination;
