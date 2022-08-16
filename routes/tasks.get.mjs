import { Router } from "express";
const router = Router();
import fs from "fs/promises";

router.get(`/:userId`, (req, res) => {
  const jsonData = fs.readFile("items.json", "utf-8");
  jsonData.then((response) => {
    const todos = JSON.parse(response);
    todos.count = todos.tasks.length;
    const startItem = (req.query.page - 1) * req.query.pp;
    const endItem = req.query.pp * req.query.page;

    const filteredTasks = todos.tasks.filter((item) => {
      switch (req.query.filterBy) {
        case "":
          return item;
        case "done":
          return item.done === true;
        case "undone":
          return item.done === false;
      }
    })

    todos.tasks = filteredTasks.sort((a, b) => {
      if (req.query.order === "asc") {
        return a.uuid - b.uuid;
      } else if (req.query.order === "desc") {
        return b.uuid - a.uuid;
      }
    })
      .slice(startItem, endItem);

    const items = {
      "count": filteredTasks.length,
      "tasks": todos.tasks
    }
    res.json(items);
  });

});

export default router;
