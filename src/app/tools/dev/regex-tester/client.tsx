"use client";

import { useState, useMemo } from "react";
import BackButton from "@/components/BackButton";

const CHEATSHEET = [
  { token: "\\d", desc: "Any digit" },
  { token: "\\D", desc: "Any non-digit" },
  { token: "\\w", desc: "Any word character" },
  { token: "\\W", desc: "Any non-word character" },
  { token: "\\s", desc: "Any whitespace" },
  { token: "\\S", desc: "Any non-whitespace" },
  { token: ".", desc: "Any single character" },
  { token: "^", desc: "Start of string" },
  { token: "$", desc: "End of string" },
  { token: "*", desc: "Zero or more" },
  { token: "+", desc: "One or more" },
  { token: "?", desc: "Zero or one" },
  { token: "{3}", desc: "Exactly 3 of the previous" },
  { token: "{2,5}", desc: "Between 2 and 5" },
  { token: "[abc]", desc: "a, b, or c" },
  { token: "[^abc]", desc: "Not a, b, or c" },
  { token: "(...)", desc: "Capturing group" },
  { token: "(?:...)", desc: "Non-capturing group" },
  { token: "a|b", desc: "Either a or b" },
  { token: "\\b", desc: "Word boundary" },
];

const PRESETS = [
  { label: "Email", pattern: "[\\w.-]+@[\\w.-]+\\.\\w+" },
  { label: "URL", pattern: "https?:\\/\\/[\\w.-]+(?:\\/[\\w./?%&=-]*)?" },
  { label: "Phone (US)", pattern: "\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}" },
  { label: "Date (YYYY-MM-DD)", pattern: "\\d{4}-\\d{2}-\\d{2}" },
  { label: "Hex color", pattern: "#[0-9a-fA-F]{6}\\b" },
];

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");
  const [showCheatsheet, setShowCheatsheet] = useState(false);

  const { matches, error } = useMemo(() => {
    if (!pattern) return { matches: [] as RegExpMatchArray[], error: "" };
    try {
      const safeFlags = flags.includes("g") ? flags : flags + "g";
      const found = Array.from(testString.matchAll(new RegExp(pattern, safeFlags)));
      return { matches: found, error: "" };
    } catch (e: any) {
      return { matches: [] as RegExpMatchArray[], error: e.message as string };
    }
  }, [pattern, flags, testString]);

  const renderedParts = useMemo(() => {
    if (!pattern || error) return [testString];
    const parts: (string | { match: string })[] = [];
    let lastIndex = 0;
    for (const m of matches) {
      if (m.index === undefined) continue;
      parts.push(testString.slice(lastIndex, m.index));
      parts.push({ match: m[0] });
      lastIndex = m.index + m[0].length;
    }
    parts.push(testString.slice(lastIndex));
    return parts;
  }, [matches, pattern, error, testString]);

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-2">Regex Tester</h1>
      <p className="text-slate mb-8 max-w-lg">
        Type a pattern, paste your text, and see matches highlighted with full match details. Runs entirely in your browser, nothing leaves your device.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-sm text-slate self-center mr-1">Try:</span>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => setPattern(p.pattern)}
            className="text-xs px-3 py-1.5 border border-ink/15 rounded-full hover:border-rust hover:text-rust transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <label className="text-sm text-slate block mb-1">Pattern</label>
        <div className="flex items-center border border-ink/15 rounded-md bg-white overflow-hidden focus-within:border-rust">
          <span className="pl-3 text-slate">/</span>
          <input
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="e.g. \d{3}-\d{4}"
            className="flex-1 p-2 font-mono text-sm outline-none min-w-0"
          />
          <span className="text-slate">/</span>
          <input
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            className="w-14 p-2 font-mono text-sm outline-none border-l border-ink/10"
          />
        </div>
        {error && <p className="text-sm text-rust mt-2">Invalid pattern: {error}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-slate block mb-2">Test string</label>
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="Paste text to search here"
            className="w-full h-56 p-3 border border-ink/15 rounded-md font-mono text-sm bg-white focus:border-rust outline-none"
          />
        </div>
        <div>
          <label className="text-sm text-slate block mb-2">Highlighted matches ({matches.length})</label>
          <div className="w-full h-56 p-3 border border-ink/15 rounded-md font-mono text-sm bg-white overflow-auto whitespace-pre-wrap">
            {renderedParts.map((part, i) =>
              typeof part === "string" ? (
                <span key={i}>{part}</span>
              ) : (
                <mark key={i} className="bg-rust/20 text-ink rounded px-0.5">
                  {part.match}
                </mark>
              )
            )}
            {!testString && !pattern && "Matches will be highlighted here."}
          </div>
        </div>
      </div>

      {matches.length > 0 && (
        <div className="mt-6">
          <p className="text-sm text-slate mb-2">Match details</p>
          <div className="border border-ink/15 rounded-md bg-white max-h-56 overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate border-b border-ink/10">
                  <th className="p-2 pl-3">#</th>
                  <th className="p-2">Match</th>
                  <th className="p-2">Index</th>
                  <th className="p-2 pr-3">Groups</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((m, i) => (
                  <tr key={i} className="border-b border-ink/5 last:border-0">
                    <td className="p-2 pl-3 text-slate">{i + 1}</td>
                    <td className="p-2 font-mono">{m[0]}</td>
                    <td className="p-2 text-slate">{m.index}</td>
                    <td className="p-2 pr-3 font-mono text-slate">
                      {m.length > 1 ? m.slice(1).join(", ") : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-10">
        <button
          onClick={() => setShowCheatsheet(!showCheatsheet)}
          className="text-sm text-rust hover:underline"
        >
          {showCheatsheet ? "Hide" : "Show"} quick reference
        </button>
        {showCheatsheet && (
          <div className="mt-4 grid sm:grid-cols-2 gap-2 max-w-2xl">
            {CHEATSHEET.map((c) => (
              <div key={c.token} className="flex gap-3 text-sm p-2 border border-ink/10 rounded-md">
                <code className="font-mono text-rust w-16 shrink-0">{c.token}</code>
                <span className="text-slate">{c.desc}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-14 pt-8 border-t border-ink/10 max-w-2xl prose-article">
        <h2 className="font-display text-lg font-semibold mb-3">How to use this</h2>
        <p>
          Type your pattern between the slashes, or click one of the preset
          buttons to start from a common pattern like an email or URL match.
          Adjust flags in the small box on the right, g for global or i for
          case-insensitive are the most common. Paste your text below and
          every match highlights instantly, with full details including each
          match's position and any capture groups shown underneath.
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
