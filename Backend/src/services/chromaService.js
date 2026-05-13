const { ChromaClient } = require("chromadb");

const client = new ChromaClient({
  host: "chromadb",
  port: 8000,
  ssl: false,
});

const COLLECTION_NAME =
  "research_documents";

let collection;

exports.initChroma = async () => {

  collection =
    await client.getOrCreateCollection({
      name: COLLECTION_NAME,
    });

  console.log(
    "Chroma collection ready"
  );
};

exports.getCollection = () => {
  return collection;
};