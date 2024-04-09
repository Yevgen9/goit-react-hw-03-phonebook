import React from "react";
import s from "./Filter.module.scss";

const Filter = ({ filter, onChange }) => {
  return (
    <input
      className={s.filterForm}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter text"
    ></input>
  );
};

export default Filter;
