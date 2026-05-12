import { useState } from "react";
import Upload from "./components/Upload";
import Ask from "./components/Ask";
import Result from "./components/Result";

function App() {
  const [result, setResult] = useState("");
return(
  <div className="dq-root">
      <div className="dq-container">
 
        <header className="dq-header">
          <span className="dq-eyebrow">Document Intelligence</span>
          <h1 className="dq-title">DocQuery</h1>
          <p className="dq-subtitle">
            Upload any document, ask a question,<br />
            get a precise answer.
          </p>
        </header>
 
        <main className="dq-steps">
 
          <section className="dq-step dq-step-1">
            <div className="dq-step-header">
              <span className="dq-step-num">01</span>
              <div>
                <h2 className="dq-step-title">Upload Document</h2>
                <p className="dq-step-hint">PDF, Word, or plain text</p>
              </div>
            </div>
            <div className="dq-step-body">
              <Upload />
            </div>
          </section>
 
          <section className="dq-step dq-step-2">
            <div className="dq-step-header">
              <span className="dq-step-num">02</span>
              <div>
                <h2 className="dq-step-title">Ask a Question</h2>
                <p className="dq-step-hint">Natural language works best</p>
              </div>
            </div>
            <div className="dq-step-body">
              <Ask setResult={setResult} />
            </div>
          </section>
 
          <section className="dq-step dq-step-3">
            <div className="dq-step-header">
              <span className="dq-step-num">03</span>
              <div>
                <h2 className="dq-step-title">Read the Answer</h2>
                <p className="dq-step-hint">Sourced from your document</p>
              </div>
            </div>
            <div className="dq-step-body dq-result-body">
              <Result result={result} />
            </div>
          </section>
 
        </main>
 
        <footer className="dq-footer">
          DocuQuery &mdash; Ask anything, find anything.
        </footer>
 
      </div>
    </div>
  );
}


export default App;