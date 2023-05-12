import express from "express";
import { createCsv } from "./controllers/listings.js";
const app = express();

const PORT = 7000;

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint to fetch listing data and save it in a CSV file
app.post("/create-csv", createCsv);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
