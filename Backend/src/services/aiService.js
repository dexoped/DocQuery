const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

exports.askGroq = async (context, question) => {
  const completion = await groq.chat.completions.create({
    model: "llama3-8b-8192",

    messages: [
      {
        role: "system",
        content:
          "Answer ONLY from the provided document context. If the answer is not present, say 'Answer not found in document.'",
      },

      {
        role: "user",
        content: `
Context:
${context}

Question:
${question}
        `,
      },
    ],

    temperature: 0.2,
  });

  return completion.choices[0].message.content;
};