import React from "react";
import style from "./DataSort.module.css";
import { SORT } from "../constants.js";

const DataSort = ({ sortItemByDate, sort }) => {
  return (
    <div className={style.sorting}>
      <p>
        Sort by Date
        <button
          className={
            sort === SORT.ASC
              ? `${style.sortingActive} ${style.up}`
              : `${style.up}`
          }
          onClick={() => sortItemByDate(SORT.ASC)}
        ></button>
        <button
          className={
            sort === SORT.DESC
              ? `${style.sortingActive} ${style.down}`
              : `${style.down}`
          }
          onClick={() => sortItemByDate(SORT.DESC)}
        ></button>
      </p>
    </div>
  );
};

export default DataSort;
