const axios = require("axios");

exports.generateAnswer = async (
  question,
  context
) => {

  const prompt = `
You are a helpful AI assistant.

Answer ONLY from the provided context.

Context:
${context}

Question:
${question}

Answer:
`;

  const response = await axios.post(
    "http://host.docker.internal:11434/api/generate",
    {
      model: "phi3:mini",
      prompt,
      stream: false,
    }
  );

  return response.data.response;
};