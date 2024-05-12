import "dotenv/config";
import express from "express";
import { usersRouter } from "./users/users.controller";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
