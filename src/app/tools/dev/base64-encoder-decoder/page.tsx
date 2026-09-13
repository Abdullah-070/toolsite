"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  function encode() {
    try {
      const bytes = new TextEncoder().encode(input);
      let binary = "";
      bytes.forEach((b) => (binary += String.fromCharCode(b)));
      setOutput(btoa(binary));
      setError("");
    } catch (e) {
      setError("Couldn't encode that text.");
      setOutput("");
    }
  }

  function decode() {
    try {
      const binary = atob(input.trim());
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      setOutput(new TextDecoder().decode(bytes));
      setError("");
    } catch (e) {
      setError("That doesn't look like valid Base64. Check for missing characters or extra spaces.");
      setOutput("");
    }
  }

  function run() {
    if (mode === "encode") encode();
    else decode();
  }

  function copyOutput() {
    if (output) navigator.clipboard.writeText(output);
  }

  function swap() {
    setMode(mode === "encode" ? "decode" : "encode");
    setInput(output);
    setOutput("");
    setError("");
  }

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-2">Base64 Encoder / Decoder</h1>
      <p className="text-slate mb-8 max-w-lg">
        Convert text to Base64 or decode Base64 back to readable text, instantly and entirely in your browser.
      </p>

      <div className="flex gap-1 border border-ink/15 rounded-md p-0.5 w-fit mb-6">
        <button
          onClick={() => setMode("encode")}
          className={`px-4 py-1.5 text-sm rounded ${mode === "encode" ? "bg-ink text-paper" : "text-slate"}`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode("decode")}
          className={`px-4 py-1.5 text-sm rounded ${mode === "decode" ? "bg-ink text-paper" : "text-slate"}`}
        >
          Decode
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-slate block mb-2">
            {mode === "encode" ? "Text input" : "Base64 input"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === "encode" ? "Type or paste text here" : "Paste Base64 here"}
            className="w-full h-56 p-3 border border-ink/15 rounded-md font-mono text-sm bg-white focus:border-rust outline-none"
          />
          <div className="flex flex-wrap gap-2 mt-3">
            <button
              onClick={run}
              className="px-4 py-2 bg-ink text-paper text-sm rounded-md hover:opacity-90"
            >
              {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
            </button>
            <button
              onClick={swap}
              className="px-4 py-2 border border-ink/20 text-sm rounded-md hover:bg-ink/5"
            >
              Swap and use output as input
            </button>
          </div>
          {error && <p className="text-sm text-rust mt-3">{error}</p>}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-slate">
              {mode === "encode" ? "Base64 output" : "Decoded text"}
            </label>
            {output && (
              <button onClick={copyOutput} className="text-xs text-rust hover:underline">
                Copy
              </button>
            )}
          </div>
          <pre className="w-full h-56 p-3 border border-ink/15 rounded-md font-mono text-sm bg-white overflow-auto whitespace-pre-wrap break-all">
            {output || "Output will appear here."}
          </pre>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-ink/10 max-w-2xl prose-article">
        <h2 className="font-display text-lg font-semibold mb-3">How to use this</h2>
        <p>
          Choose Encode to turn regular text into Base64, or Decode to turn
          Base64 back into readable text. Everything runs locally in your
          browser using the same encoding built into JavaScript itself, so
          nothing you type is sent to a server. Use "Swap and use output as
          input" to quickly flip direction and double-check a round trip.
        </p>
      </div>

      <div className="mt-10">
        <a href="/tools/dev" className="text-sm text-rust hover:underline">
          Back to all developer tools
        </a>
      </div>
    </div>
  );
}
