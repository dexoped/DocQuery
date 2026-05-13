const {
  cosineSimilarity,
} = require("./similarityService");

exports.retrieveRelevantChunks = (
  storedChunks,
  queryEmbedding,
  filters = {},
  topK = 2
) => {

  // Step 1: Apply metadata filtering
  const filteredChunks = storedChunks.filter((chunk) => {

    // No filters → allow all
    if (Object.keys(filters).length === 0) {
      return true;
    }

    // Match all filter conditions
    return Object.entries(filters).every(
      ([key, value]) =>
        chunk.metadata?.[key] === value
    );
  });

  // Step 2: Score chunks
  const scoredChunks = filteredChunks.map((chunk) => ({

    text: chunk.pageContent,

    metadata: chunk.metadata,

    score: cosineSimilarity(
      chunk.embedding,
      queryEmbedding
    ),
  }));

  // Step 3: Sort by similarity
  scoredChunks.sort(
    (a, b) => b.score - a.score
  );

  // Step 4: Return top K
  return scoredChunks.slice(0, topK);
};