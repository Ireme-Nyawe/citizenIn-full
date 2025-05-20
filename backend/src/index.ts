import express from "express";
import dotenv from "dotenv";
import dbConnection from "./database/config/config";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());

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
