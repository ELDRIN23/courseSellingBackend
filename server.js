import express, { urlencoded } from "express";
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

//DB connection
connectDB();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser())

//routes
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send(`web is live, active on: ${port}`);
});

app.listen(port, () => {
  console.log(`web listening on port ${port}`);
});