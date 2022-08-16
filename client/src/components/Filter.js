import React from "react";
import style from "./Filter.module.css";
import { FILTER } from "../constants.js";

const Filter = ({ filter, handleFilterItem }) => {
  return (
    <div className={style.filterButtons}>
      <button
        className={filter === FILTER.ALL ? `${style.active}` : null}
        onClick={() => handleFilterItem(FILTER.ALL)}
      >
        All
      </button>
      <button
        className={filter === FILTER.DONE ? `${style.active}` : null}
        onClick={() => handleFilterItem(FILTER.DONE)}
      >
        Done
      </button>
      <button
        className={filter === FILTER.UNDONE ? `${style.active}` : null}
        onClick={() => handleFilterItem(FILTER.UNDONE)}
      >
        Undone
      </button>
    </div>
  );
};

export default Filter;
