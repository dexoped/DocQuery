const multer = require("multer");

const upload = multer({
  dest: "uploads/",
}).single("file");

const {
  extractTextFromPDF,
} = require("../services/pdfService");

const {
  chunkText,
} = require("../services/chunkService");

const {
  getEmbedding,
} = require("../services/embeddingService");

const {
  getCollection,
} = require("../services/chromaService");

exports.uploadFile = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({
        error: err.message,
      });
    }

    try {
      const text = await extractTextFromPDF(
        req.file.path
      );

     const metadata = {
    fileName: req.file.originalname,
    department: req.body.department,
    year: req.body.year,
    subject: req.body.subject,
    uploadedAt: new Date().toISOString()
};

const chunks = chunkText(text, metadata);

      console.log("CHUNKS:", chunks.length);

     const embeddedChunks = [];

for (const chunk of chunks.slice(0, 20)) {

  const embedding = await getEmbedding(
    chunk.pageContent
  );

  embeddedChunks.push({

    pageContent: chunk.pageContent,

    embedding,

    metadata: chunk.metadata,
  });
}
     const collection = getCollection();

await collection.add({

  ids: embeddedChunks.map(
    (_, index) =>
      `chunk-${Date.now()}-${index}`
  ),

  embeddings: embeddedChunks.map(
    chunk => chunk.embedding
  ),

  documents: embeddedChunks.map(
    chunk => chunk.pageContent
  ),

  metadatas: embeddedChunks.map(
    chunk => chunk.metadata
  ),
});

      res.json({
        message: "Upload success",
        totalChunks: chunks.length,
        embeddedChunks: embeddedChunks.length,
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        error: "Processing failed",
      });
    }
  });
};