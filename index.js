import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./config/database.js";
import router from "./routes/auth.js";
import postRouter from "./routes/post.js";
const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true })); // dışarıdan veri alındığından sıkıntı olmadan verinin yazılabilmesi için kullandık
dotenv.config();
app.use("/", router);
app.use("/", postRouter);

app.get("/", (req, res) => {
  res.json({ message: "deneme deneme" });
});

const PORT = process.env.PORT;

db();
app.listen(PORT, () => {
  console.log(`Server is listening from ${PORT}`);
});
