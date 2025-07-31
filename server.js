import express from "express";
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";

const app = express();
const port = 3000;

//DB connection
connectDB();

//routes
app.use("/api",apiRouter);


app.get("/", (req, res) => {
  res.send(`web is live, active on: ${port}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
