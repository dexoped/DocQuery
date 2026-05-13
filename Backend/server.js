const express = require("express");
const cors = require("cors");
require("dotenv").config();
const uploadRoutes = require("./src/routes/uploadRoutes");
const askRoutes = require("./src/routes/askRoutes");
const {
  initChroma,
} = require("./src/services/chromaService")
const app = express();
const PORT = process.env.PORT || 5001;
// ✅ MUST be first
app.use(cors());

// debug log (optional but helpful)
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

app.use(express.json());

app.use("/api/upload", uploadRoutes);

app.use("/api/ask", askRoutes);

// ✅ global error handler (VERY IMPORTANT)
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);
  res.status(500).json({ error: err.message });
});

const startServer = async () => {

  await initChroma();

  app.listen(PORT, () => {
    console.log(
      `Server running on port ${PORT}`
    );
  });
};

startServer();