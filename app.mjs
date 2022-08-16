import express from "express";
import morgan from "morgan";
import 'dotenv/config'

const app = express();

import todo from "./routes/tasks.get.mjs";
import deleteItem from "./routes/task.delete.mjs";
import createItem from "./routes/task.post.mjs";
import editItem from "./routes/task.patch.mjs";

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/todo-back-end");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, DELETE, OPTIONS');
  next();
});

const port = process.env.PORT || 3001;

app.listen(port);

app.use("/tasks", todo);
app.use("/task", deleteItem);
app.use("/task", createItem);
app.use("/task", editItem);