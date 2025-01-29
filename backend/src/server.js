import express from "express";
import "./db.js";
import cors from "cors";
import ticketRoutes from "../routes/ticketRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", ticketRoutes);

const PORT = process.env.PORT || 8000;

// Basic route to test server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
