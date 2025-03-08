require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// Import routes
const authRoutes = require("./src/routes/authRoutes");
const tenderRoutes = require("./src/routes/tenderRoutes");
const bidRoutes = require("./src/routes/bidRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/tenders", tenderRoutes);
app.use("/api/bids", bidRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
