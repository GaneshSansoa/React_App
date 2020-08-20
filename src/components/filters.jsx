import React, { Component } from "react";

//import { getGenres } from "../services/fakeGenreService";
const Filters = (props) => {
  const { onFilter, items, textProperty, selectedItem, valueProperty } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onFilter(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
Filters.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default Filters;
