import { Router } from "express";
const router = Router();
import fs from "fs/promises";

router.post("/:userId", (req, res) => {
  const jsonData = fs.readFile("items.json", "utf-8");
  jsonData.then((response) => {
    const todos = JSON.parse(response);
    todos.tasks.push(req.body);
    fs.writeFile("items.json", JSON.stringify(todos));
    res.json(todos);
  });
});

export default router;
