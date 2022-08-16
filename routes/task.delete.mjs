import { Router } from "express";
const router = Router();
import fs from "fs/promises";

router.delete("/:userId/:uuid", (req, res) => {
  const jsonData = fs.readFile("items.json", "utf-8");
  jsonData.then((response) => {
    const todos = JSON.parse(response);
    todos.tasks = todos.tasks.filter((el) => el.uuid != req.params.uuid);
    fs.writeFile("items.json", JSON.stringify(todos));
    res.json(todos);
  })
});

export default router;
