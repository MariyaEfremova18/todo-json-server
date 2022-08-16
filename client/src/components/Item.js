import React from "react";
import style from "./Item.module.css";

const Item = ({
  item,
  deleteItem,
  editItem,
  onHandleChange,
  cancelChanges,
  editedItemUuid,
}) => {
  const date = item.createdAt.slice(0, 10);

  return (
    <div
      className={style.itemOfList}
      onDoubleClick={(event) => {
        if (!event.target.classList.contains(`${style.checkbox}`)) {
          editItem(item.uuid);
        }
      }}
    >
      <div className={style.content}>
        <input
          type="checkbox"
          className={style.checkbox}
          defaultChecked={item.done}
          onClick={(e) => onHandleChange(item.name, item.uuid, !item.done, e)}
        />
        {editedItemUuid === item.uuid ? (
          <input
            autoFocus
            className={style.editInput}
            defaultValue={item.name}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim() !== "") {
                onHandleChange(e.target.value.trim(), item.uuid, item.done, e);
              } else if (e.key === "Escape") {
                cancelChanges(item.uuid);
              }
            }}
          />
        ) : (
          <p>{item.name}</p>
        )}
      </div>
      <div className={style.dateAndDelete}>
        <p className={style.date}>{date}</p>
        <button onClick={() => deleteItem(item.uuid)}></button>
      </div>
    </div>
  );
};

export default Item;
