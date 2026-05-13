const { ChromaClient } = require("chromadb");

const client = new ChromaClient({
  path: "http://localhost:8000",
});

const COLLECTION_NAME = "research_documents";

let collection;

exports.initChroma = async () => {

  collection =
    await client.getOrCreateCollection({
      name: COLLECTION_NAME,
    });

  console.log("Chroma collection ready");
};

exports.getCollection = () => collection;