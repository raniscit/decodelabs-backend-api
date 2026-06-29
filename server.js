const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");


dotenv.config();

// Create Express app
const app = express();

// Middleware

// Allow requests from frontend/Postman
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Temporary Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to DecodeLabs Backend API ",
  });
});

app.use("/users", userRoutes);

app.use(errorHandler);
// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});