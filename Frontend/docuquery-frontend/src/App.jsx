import { useState } from "react";
import Upload from "./components/Upload";
import Ask from "./components/Ask";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState("");

  return (
    <div style={{ padding: "40px", fontFamily: "cursive" }}>
      <h1>DocuQuery</h1>

      <Upload />
      <Ask setResult={setResult} />
      <Result result={result} />
    </div>
  );
}

export default App;