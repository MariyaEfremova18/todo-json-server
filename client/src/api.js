import axios from "axios";
import { ITEMS_PER_PAGE, USER_ID } from "./constants.js";

const todoAPI = axios.create({
  baseURL: process.env.REACT_APP_TODO_API,
});

export const getItems = (filter, sort, currentPage) => {
  return todoAPI.get(`/tasks/${USER_ID}`, {
    params: {
      filterBy: filter,
      order: sort,
      pp: ITEMS_PER_PAGE,
      page: currentPage,
    },
  });
};

export const createNewItem = (itemTitle) => {
  return todoAPI.post(`/task/${USER_ID}`, {
    uuid: Date.now(),
    name: itemTitle,
    done: false,
    createdAt: new Date(),
  });
};

export const changeItem = (name, uuid, done) => {
  return todoAPI.patch(`/task/${USER_ID}/${uuid}`, {
    name,
    done,
  });
};

export const deleteThisItem = (uuid) => {
  return todoAPI.delete(`/task/${USER_ID}/${uuid}`);
};
