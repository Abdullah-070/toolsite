"use client";

import { useState, useMemo } from "react";
import BackButton from "@/components/BackButton";

type TreeNode = {
  key: string | null;
  value: any;
  type: string;
};

function getType(value: any): string {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

function lineColFromPosition(text: string, position: number) {
  const upto = text.slice(0, position);
  const lines = upto.split("\n");
  return { line: lines.length, col: lines[lines.length - 1].length + 1 };
}

function JsonTree({ data, keyName, depth = 0 }: { data: any; keyName: string | null; depth?: number }) {
  const [collapsed, setCollapsed] = useState(depth > 2);
  const type = getType(data);

  if (type === "object" || type === "array") {
    const entries = type === "array" ? data.map((v: any, i: number) => [String(i), v]) : Object.entries(data);
    const bracket = type === "array" ? ["[", "]"] : ["{", "}"];
    return (
      <div className="font-mono text-sm">
        <span
          className="cursor-pointer select-none hover:bg-ink/5 rounded"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="text-slate mr-1">{collapsed ? "▶" : "▼"}</span>
          {keyName !== null && <span className="text-rust">"{keyName}"</span>}
          {keyName !== null && <span className="text-ink">: </span>}
          <span className="text-slate">{bracket[0]}</span>
          {collapsed && <span className="text-slate"> … {entries.length} items {bracket[1]}</span>}
        </span>
        {!collapsed && (
          <div className="pl-5 border-l border-ink/10 ml-1.5">
            {entries.map(([k, v]: [string, any]) => (
              <JsonTree key={k} data={v} keyName={k} depth={depth + 1} />
            ))}
          </div>
        )}
        {!collapsed && <div className="text-slate">{bracket[1]}</div>}
      </div>
    );
  }

  const valueColor =
    type === "string" ? "text-emerald-700" : type === "number" ? "text-blue-700" : "text-purple-700";
  const displayValue = type === "string" ? `"${data}"` : String(data);

  return (
    <div className="font-mono text-sm pl-5">
      {keyName !== null && <span className="text-rust">"{keyName}"</span>}
      {keyName !== null && <span className="text-ink">: </span>}
      <span className={valueColor}>{displayValue}</span>
    </div>
  );
}

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [errorPos, setErrorPos] = useState<{ line: number; col: number } | null>(null);
  const [view, setView] = useState<"text" | "tree">("text");
  const [parsedData, setParsedData] = useState<any>(null);

  const stats = useMemo(() => {
    if (!output) return null;
    const lines = output.split("\n").length;
    const bytes = new Blob([output]).size;
    return { lines, bytes };
  }, [output]);

  function runParse(): any | null {
    try {
      const parsed = JSON.parse(input);
      setError("");
      setErrorPos(null);
      return parsed;
    } catch (e: any) {
      const msg = e.message as string;
      const match = msg.match(/position (\d+)/);
      if (match) {
        setErrorPos(lineColFromPosition(input, parseInt(match[1], 10)));
      } else {
        setErrorPos(null);
      }
      setError(msg);
      return null;
    }
  }

  function format(indent: number) {
    const parsed = runParse();
    if (parsed !== null) {
      setOutput(JSON.stringify(parsed, null, indent));
      setParsedData(parsed);
    } else {
      setOutput("");
      setParsedData(null);
    }
  }

  function minify() {
    const parsed = runParse();
    if (parsed !== null) {
      setOutput(JSON.stringify(parsed));
      setParsedData(parsed);
    } else {
      setOutput("");
      setParsedData(null);
    }
  }

  function copyOutput() {
    if (output) navigator.clipboard.writeText(output);
  }

  function downloadOutput() {
    if (!output) return;
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-2">JSON Formatter</h1>
      <p className="text-slate mb-8 max-w-lg">
        Paste messy or minified JSON to format, minify, or explore it as a collapsible tree. Runs entirely in your browser, nothing is sent anywhere.
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
          {error && (
            <p className="text-sm text-rust mt-3">
              {error}
              {errorPos && ` (line ${errorPos.line}, column ${errorPos.col})`}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-1 border border-ink/15 rounded-md p-0.5">
              <button
                onClick={() => setView("text")}
                className={`px-3 py-1 text-xs rounded ${view === "text" ? "bg-ink text-paper" : "text-slate"}`}
              >
                Text
              </button>
              <button
                onClick={() => setView("tree")}
                className={`px-3 py-1 text-xs rounded ${view === "tree" ? "bg-ink text-paper" : "text-slate"}`}
              >
                Tree
              </button>
            </div>
            {output && (
              <div className="flex gap-3">
                <button onClick={copyOutput} className="text-xs text-rust hover:underline">Copy</button>
                <button onClick={downloadOutput} className="text-xs text-rust hover:underline">Download</button>
              </div>
            )}
          </div>

          {view === "text" ? (
            <pre className="w-full h-72 p-3 border border-ink/15 rounded-md font-mono text-sm bg-white overflow-auto whitespace-pre-wrap">
              {output || "Formatted output will appear here."}
            </pre>
          ) : (
            <div className="w-full h-72 p-3 border border-ink/15 rounded-md bg-white overflow-auto">
              {parsedData !== null ? (
                <JsonTree data={parsedData} keyName={null} />
              ) : (
                <p className="text-sm text-slate">Format your JSON first to see the tree view.</p>
              )}
            </div>
          )}

          {stats && (
            <p className="text-xs text-slate mt-2">
              {stats.lines} lines, {stats.bytes} bytes
            </p>
          )}
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-ink/10 max-w-2xl prose-article">
        <h2 className="font-display text-lg font-semibold mb-3">How to use this</h2>
        <p>
          Paste any JSON into the box on the left, then choose whether you
          want it formatted with clean indentation, minified down to a
          single line, or explored as a collapsible tree so you can drill
          into nested objects and arrays without scrolling through a wall of
          text. If something's wrong with your JSON, this tool tells you
          exactly which line and column to check instead of failing
          silently.
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
