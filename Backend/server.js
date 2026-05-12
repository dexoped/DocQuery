const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./src/routes/uploadRoutes");

const app = express();

// ✅ MUST be first
app.use(cors());

// debug log (optional but helpful)
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

app.use(express.json());

app.use("/api/upload", uploadRoutes);

// ✅ global error handler (VERY IMPORTANT)
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);
  res.status(500).json({ error: err.message });
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});