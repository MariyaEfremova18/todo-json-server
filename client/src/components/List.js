import React from "react";
import Item from "./Item";
import style from "./List.module.css";

const List = ({
  onHandleChange,
  items,
  deleteItem,
  checkItem,
  editItem,
  cancelChanges,
  editedItemUuid,
}) => {
  return (
    <ul className={style.list}>
      {items.map((item) => (
        <Item
          onHandleChange={onHandleChange}
          key={item.uuid}
          deleteItem={deleteItem}
          item={item}
          checkItem={checkItem}
          editItem={editItem}
          editedItemUuid={editedItemUuid}
          cancelChanges={cancelChanges}
        />
      ))}
    </ul>
  );
};

export default List;
