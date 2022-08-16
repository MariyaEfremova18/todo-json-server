import { Router } from "express";
import fs from "fs/promises";
const router = Router();

router.patch("/:userId/:uuid", (req, res) => {
    const jsonData = fs.readFile("items.json", "utf-8");
    jsonData.then((response) => {
        const todos = JSON.parse(response);
        const editedItemIndex = todos.tasks.findIndex((el) => el.uuid == req.params.uuid);
        todos.tasks[editedItemIndex].name = req.body.name;
        todos.tasks[editedItemIndex].done = req.body.done;
        fs.writeFile("items.json", JSON.stringify(todos));
        res.json(todos);
    })
});

export default router;
