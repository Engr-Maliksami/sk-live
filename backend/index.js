const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const cors = require("cors");
const config = require("./config");
const http = require("http");
const server = http.createServer(app);
global.io = require("socket.io")(server);
const Route = require("./route");
require("./socket");
const logger = require("morgan");
require('dotenv').config(); // Load environment variables from .env file

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use("/", Route);

// Serve static files from the frontend/public directory
app.use(express.static(path.join(__dirname, "..", "frontend", "public")));

// Serve public index.html file for all routes
app.get("/*", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "..", "frontend", "public", "index.html"));
});

// MongoDB connection string from environment variables
const MONGODB_CONNECTION_STRING = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}`;

// MongoDB connection
mongoose.connect(MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MONGO: successfully connected to db");
});

// Start the server
server.listen(config.PORT, () => {
  console.log("Magic happens on port " + config.PORT);
});
