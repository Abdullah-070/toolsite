import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Developer Tools",
  description:
    "Free browser-based developer tools: JSON formatter, regex tester, Base64 encoder/decoder, JWT decoder, and UUID generator. No sign-up required.",
};

export default function DevTools() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-4">Developer Tools</h1>
      <p className="text-slate mb-8 max-w-lg">
        Five free tools are live so far: a JSON formatter, a regex tester, a
        Base64 encoder and decoder, a JWT decoder, and a UUID generator.
        Everything runs locally in your browser, nothing you paste is sent
        to a server. More utilities are added regularly.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <a
          href="/tools/dev/json-formatter"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">JSON Formatter</h2>
          <p className="text-sm text-slate mt-1">Format or minify JSON instantly, in your browser.</p>
        </a>
        <a
          href="/tools/dev/regex-tester"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">Regex Tester</h2>
          <p className="text-sm text-slate mt-1">Test patterns against your text with live highlighted matches.</p>
        </a>
        <a
          href="/tools/dev/base64-encoder-decoder"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">Base64 Encoder / Decoder</h2>
          <p className="text-sm text-slate mt-1">Convert text to Base64 or decode it back, instantly.</p>
        </a>
        <a
          href="/tools/dev/jwt-decoder"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">JWT Decoder</h2>
          <p className="text-sm text-slate mt-1">Decode a JSON Web Token and see its header and payload instantly.</p>
        </a>
        <a
          href="/tools/dev/uuid-generator"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">UUID / GUID Generator</h2>
          <p className="text-sm text-slate mt-1">Generate random, version 4 UUIDs, one or a hundred at a time.</p>
        </a>
      </div>
    </div>
  );
}
