import { useState } from "react";
import { askQuestion } from "../services/api";

function Ask({ setResult }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;

    setLoading(true);

    try {
      const data = await askQuestion(question);
      setResult(data.answer);
    } catch (err) {
      setResult("Error fetching answer");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Ask Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleAsk}>
        {loading ? "Thinking..." : "Ask"}
      </button>
    </div>
  );
}

export default Ask;