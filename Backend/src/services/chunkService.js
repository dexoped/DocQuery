exports.chunkText = (
    text,
    metadata = {},
    chunkSize = 800,
    overlap = 150
) => {

    const chunks = [];
    let start = 0;
    let chunkIndex = 0;

    while (start < text.length) {

        const end = start + chunkSize;

        const chunk = text.slice(start, end);

        chunks.push({
            pageContent: chunk,
            metadata: {
                ...metadata,
                chunkIndex
            }
        });

        start += chunkSize - overlap;
        chunkIndex++;
    }

    return chunks;
};