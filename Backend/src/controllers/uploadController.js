const multer = require("multer");
const upload = multer({ dest: "uploads/" }).single("file");
const { extractTextFromPDF } = require("../services/pdfService");
const { chunkText } = require("../services/chunkService");

exports.uploadFile = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const text = await extractTextFromPDF(req.file.path);

      const chunks = chunkText(text);

      res.json({
        message: "Upload + chunking success",
        totalChunks: chunks.length,
        sampleChunk: chunks[0],
      });
    } catch (error) {
      console.error("PROCESSING ERROR:", error); // 👈 ADD THIS
  res.status(500).json({ error: error.message }); // 👈 SHOW REAL ERROR
    }
  });
};