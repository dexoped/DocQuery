let storedChunks = [];

exports.setChunks = (chunks) => {
  storedChunks = chunks;
};

exports.getChunks = () => {
  return storedChunks;
};