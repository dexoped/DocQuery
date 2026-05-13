const {
  getEmbedding,
} = require("../services/embeddingService");

const {
  retrieveRelevantChunks,
} = require("../services/retrievalService");

const {
  getCollection,
} = require("../services/chromaService");

const {
  generateAnswer,
} = require("../services/llmService");

exports.askQuestion = async (req, res) => {

  try {

   const {
  question,
  filters = {}
} = req.body;

    const queryEmbedding =
  await getEmbedding(question);

    const collection = getCollection();
    

const queryOptions = {

  queryEmbeddings: [
    queryEmbedding
  ],

  nResults: 5,
};

if (Object.keys(filters).length > 0) {
  queryOptions.where = filters;
}

const results =
  await collection.query(queryOptions);

  const formattedResults =
  results.documents[0].map(
    (doc, index) => ({

      text: doc,

      metadata:
        results.metadatas[0][index],

      score:
        results.distances[0][index],
    })
);

    const context = formattedResults
  .map((item) => item.text)
  .join("\n\n")
  .slice(0, 3000);

    const answer =
      await generateAnswer(
        question,
        context
      );

    res.json({
      question,
      answer,
      sources: formattedResults,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Question answering failed",
    });

  }
};