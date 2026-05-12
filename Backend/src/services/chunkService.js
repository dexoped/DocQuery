exports.chunkText = (text, chunksize = 800, overlap = 150) =>{
    const chunks = [];
    let start = 0;
    while(start<text.length){
        const end = start + chunksize;
        const chunk = text.slice(start,end);
        chunks.push(chunk);
        start += chunksize - overlap;
    }
    return chunks;
}