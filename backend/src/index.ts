import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import dbConnection from "./database/config/config";
import router from "./routes";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.get("/", (_req, res) => {
  res.send("Hello from Citizen System");
});

dbConnection()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`App running on http://localhost:${PORT}`)
    );
  })
  .catch((error: any) => {
    console.error("Error connecting to the database:", error);
  });
