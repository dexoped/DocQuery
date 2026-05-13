const axios = require("axios");

exports.getEmbedding = async (text) => {
  const response = await axios.post(
    "http://host.docker.internal:11434/api/embeddings",
    {
      model: "nomic-embed-text",
      prompt: text,
    }
  );

  return response.data.embedding;
};