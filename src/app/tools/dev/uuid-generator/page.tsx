"use client";

import { useState } from "react";
import BackButton from "@/components/BackButton";

function generateUuidV4(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  // Fallback for older environments
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([generateUuidV4()]);
  const [count, setCount] = useState(1);
  const [uppercase, setUppercase] = useState(false);
  const [noDashes, setNoDashes] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  function format(id: string) {
    let result = id;
    if (noDashes) result = result.replace(/-/g, "");
    if (uppercase) result = result.toUpperCase();
    return result;
  }

  function regenerate() {
    const next = Array.from({ length: Math.min(Math.max(count, 1), 100) }, () => generateUuidV4());
    setUuids(next);
  }

  function copyOne(id: string, i: number) {
    navigator.clipboard.writeText(format(id));
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1200);
  }

  function copyAll() {
    navigator.clipboard.writeText(uuids.map(format).join("\n"));
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-2">UUID / GUID Generator</h1>
      <p className="text-slate mb-8 max-w-lg">
        Generate random, version 4 UUIDs (also called GUIDs) instantly. Runs entirely in your browser using the same cryptographically secure randomness built into it.
      </p>

      <div className="flex flex-wrap items-end gap-4 mb-6">
        <div>
          <label className="text-sm text-slate block mb-1">How many</label>
          <input
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            className="w-24 p-2 border border-ink/15 rounded-md text-sm bg-white focus:border-rust outline-none"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-slate">
          <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
          Uppercase
        </label>
        <label className="flex items-center gap-2 text-sm text-slate">
          <input type="checkbox" checked={noDashes} onChange={(e) => setNoDashes(e.target.checked)} />
          Remove dashes
        </label>
        <button
          onClick={regenerate}
          className="px-4 py-2 bg-ink text-paper text-sm rounded-md hover:opacity-90"
        >
          Generate
        </button>
        {uuids.length > 1 && (
          <button
            onClick={copyAll}
            className="px-4 py-2 border border-ink/20 text-sm rounded-md hover:bg-ink/5"
          >
            Copy all
          </button>
        )}
      </div>

      <div className="border border-ink/15 rounded-md bg-white divide-y divide-ink/10 max-h-96 overflow-auto">
        {uuids.map((id, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-2.5">
            <code className="font-mono text-sm">{format(id)}</code>
            <button
              onClick={() => copyOne(id, i)}
              className="text-xs text-rust hover:underline ml-4 shrink-0"
            >
              {copiedIndex === i ? "Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-ink/10 max-w-2xl prose-article">
        <h2 className="font-display text-lg font-semibold mb-3">How to use this</h2>
        <p>
          Set how many you need, up to 100 at a time, and click Generate. Each
          one is a version 4 UUID, meaning it's built from random data rather
          than your device's identity or the current time, which is the
          version almost every modern system actually wants. Toggle
          uppercase or remove dashes if your target system expects a
          different format, then copy individual values or everything at
          once.
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
