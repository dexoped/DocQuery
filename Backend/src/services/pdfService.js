const fs = require("fs");
const pdfParse = require("pdf-parse");

exports.extractTextFromPDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);

  if (!data.text || data.text.trim().length < 50) {
    throw new Error("PDF has no readable text");
  }

  return data.text;
};