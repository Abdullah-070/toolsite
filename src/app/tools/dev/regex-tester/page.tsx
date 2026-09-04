"use client";

import { useState, useMemo } from "react";
import BackButton from "@/components/BackButton";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [testString, setTestString] = useState("");

  const { matches, error } = useMemo(() => {
    if (!pattern) return { matches: [], error: "" };
    try {
      const re = new RegExp(pattern, flags);
      const found = Array.from(testString.matchAll(new RegExp(pattern, flags.includes("g") ? flags : flags + "g")));
      return { matches: found, error: "" };
    } catch (e: any) {
      return { matches: [], error: e.message as string };
    }
  }, [pattern, flags, testString]);

  function highlighted() {
    if (!pattern || error) return testString;
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
  }

  const renderedParts = highlighted();

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-2">Regex Tester</h1>
      <p className="text-slate mb-8 max-w-lg">
        Type a pattern, paste your text, and see matches highlighted instantly. Runs entirely in your browser.
      </p>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex-1 min-w-[220px]">
          <label className="text-sm text-slate block mb-1">Pattern</label>
          <div className="flex items-center border border-ink/15 rounded-md bg-white overflow-hidden focus-within:border-rust">
            <span className="pl-3 text-slate">/</span>
            <input
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="e.g. \d{3}-\d{4}"
              className="flex-1 p-2 font-mono text-sm outline-none"
            />
            <span className="text-slate">/</span>
            <input
              value={flags}
              onChange={(e) => setFlags(e.target.value)}
              className="w-14 p-2 font-mono text-sm outline-none border-l border-ink/10"
            />
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-rust mb-4">Invalid pattern: {error}</p>}

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
          <label className="text-sm text-slate block mb-2">
            Matches ({matches.length})
          </label>
          <div className="w-full h-56 p-3 border border-ink/15 rounded-md font-mono text-sm bg-white overflow-auto whitespace-pre-wrap">
            {Array.isArray(renderedParts)
              ? renderedParts.map((part, i) =>
                  typeof part === "string" ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <mark key={i} className="bg-rust/20 text-ink rounded px-0.5">
                      {part.match}
                    </mark>
                  )
                )
              : testString || "Matches will be highlighted here."}
          </div>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-ink/10 max-w-2xl prose-article">
        <h2 className="font-display text-lg font-semibold mb-3">How to use this</h2>
        <p>
          Type your regular expression between the slashes, adjust flags like
          g for global or i for case-insensitive in the small box on the
          right, then paste the text you want to search. Every match gets
          highlighted on the right side as you type, so you can adjust your
          pattern until it catches exactly what you need.
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
