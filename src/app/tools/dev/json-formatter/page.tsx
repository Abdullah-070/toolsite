"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function format(indent: number) {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      setError("That doesn't look like valid JSON. Check for a missing comma, quote, or bracket.");
      setOutput("");
    }
  }

  function minify() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError("That doesn't look like valid JSON. Check for a missing comma, quote, or bracket.");
      setOutput("");
    }
  }

  function copyOutput() {
    if (output) navigator.clipboard.writeText(output);
  }

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="font-display text-3xl font-semibold mb-2">JSON Formatter</h1>
      <p className="text-slate mb-8 max-w-lg">
        Paste messy or minified JSON below and format it, or shrink it back down. Runs entirely in your browser, nothing is sent anywhere.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-slate block mb-2">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"example": "paste your JSON here"}'
            className="w-full h-72 p-3 border border-ink/15 rounded-md font-mono text-sm bg-white focus:border-rust outline-none"
          />
          <div className="flex flex-wrap gap-2 mt-3">
            <button
              onClick={() => format(2)}
              className="px-4 py-2 bg-ink text-paper text-sm rounded-md hover:opacity-90"
            >
              Format (2 spaces)
            </button>
            <button
              onClick={() => format(4)}
              className="px-4 py-2 border border-ink/20 text-sm rounded-md hover:bg-ink/5"
            >
              Format (4 spaces)
            </button>
            <button
              onClick={minify}
              className="px-4 py-2 border border-ink/20 text-sm rounded-md hover:bg-ink/5"
            >
              Minify
            </button>
          </div>
          {error && <p className="text-sm text-rust mt-3">{error}</p>}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-slate">Output</label>
            {output && (
              <button onClick={copyOutput} className="text-xs text-rust hover:underline">
                Copy
              </button>
            )}
          </div>
          <pre className="w-full h-72 p-3 border border-ink/15 rounded-md font-mono text-sm bg-white overflow-auto whitespace-pre-wrap">
            {output || "Formatted output will appear here."}
          </pre>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-ink/10 max-w-2xl prose-article">
        <h2 className="font-display text-lg font-semibold mb-3">How to use this</h2>
        <p>
          Paste any JSON into the box on the left, then choose whether you want
          it formatted with clean indentation for readability, or minified
          down to a single line for production use. If something's wrong with
          your JSON, like a missing comma or an unclosed bracket, this tool
          will tell you instead of just failing silently.
        </p>
      </div>

      <div className="not-prose mt-10">
        <a
          href="/tools/dev"
          className="text-sm text-rust hover:underline"
        >
          Back to all developer tools
        </a>
      </div>
    </div>
  );
}
