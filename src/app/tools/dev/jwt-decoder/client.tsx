"use client";

import { useState, useMemo } from "react";
import BackButton from "@/components/BackButton";

function base64UrlDecode(str: string): string {
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const binary = atob(s);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function base64UrlToUint8Array(str: string): Uint8Array {
  let s = str.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const binary = atob(s);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function formatTimestamp(ts: number): string {
  return new Date(ts * 1000).toLocaleString();
}

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [secret, setSecret] = useState("");
  const [verifyResult, setVerifyResult] = useState<"idle" | "valid" | "invalid" | "unsupported">("idle");

  const decoded = useMemo(() => {
    if (!token.trim()) return null;
    const parts = token.trim().split(".");
    if (parts.length !== 3) return { error: "A JWT should have three parts separated by dots (header.payload.signature)." };
    try {
      const header = JSON.parse(base64UrlDecode(parts[0]));
      const payload = JSON.parse(base64UrlDecode(parts[1]));
      return { header, payload, signaturePart: parts[2], signingInput: `${parts[0]}.${parts[1]}` };
    } catch (e) {
      return { error: "Couldn't decode this token. Check that it was copied completely and correctly." };
    }
  }, [token]);

  async function verifySignature() {
    if (!decoded || "error" in decoded || !secret) return;
    if (decoded.header.alg !== "HS256") {
      setVerifyResult("unsupported");
      return;
    }
    try {
      const key = await crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
      );
      const sigBuffer = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(decoded.signingInput));
      const sigArray = new Uint8Array(sigBuffer);
      const expected = base64UrlToUint8Array(decoded.signaturePart);
      const match = sigArray.length === expected.length && sigArray.every((b, i) => b === expected[i]);
      setVerifyResult(match ? "valid" : "invalid");
    } catch {
      setVerifyResult("invalid");
    }
  }

  const claimNotes: Record<string, string> = {
    exp: "Expiration time",
    iat: "Issued at",
    nbf: "Not valid before",
    sub: "Subject (usually the user ID)",
    iss: "Issuer",
    aud: "Audience",
  };

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-2">JWT Decoder</h1>
      <p className="text-slate mb-8 max-w-lg">
        Paste a JSON Web Token to instantly see its decoded header and payload. Runs entirely in your browser, your token is never sent anywhere.
      </p>

      <label className="text-sm text-slate block mb-2">Encoded token</label>
      <textarea
        value={token}
        onChange={(e) => {
          setToken(e.target.value);
          setVerifyResult("idle");
        }}
        placeholder="Paste your JWT here, e.g. eyJhbGciOi..."
        className="w-full h-28 p-3 border border-ink/15 rounded-md font-mono text-xs bg-white focus:border-rust outline-none"
      />

      {decoded && "error" in decoded && (
        <p className="text-sm text-rust mt-3">{decoded.error}</p>
      )}

      {decoded && !("error" in decoded) && (
        <>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="text-sm text-slate block mb-2">Header</label>
              <pre className="w-full p-3 border border-ink/15 rounded-md font-mono text-sm bg-white overflow-auto">
                {JSON.stringify(decoded.header, null, 2)}
              </pre>
            </div>
            <div>
              <label className="text-sm text-slate block mb-2">Payload</label>
              <pre className="w-full p-3 border border-ink/15 rounded-md font-mono text-sm bg-white overflow-auto">
                {JSON.stringify(decoded.payload, null, 2)}
              </pre>
            </div>
          </div>

          {Object.keys(decoded.payload).some((k) => ["exp", "iat", "nbf"].includes(k)) && (
            <div className="mt-6 p-4 border border-ink/10 rounded-md bg-white max-w-2xl">
              <p className="text-sm text-slate mb-2">Readable claims</p>
              <ul className="text-sm space-y-1">
                {Object.entries(decoded.payload).map(([key, value]) => {
                  if (["exp", "iat", "nbf"].includes(key) && typeof value === "number") {
                    return (
                      <li key={key}>
                        <span className="font-mono text-rust">{key}</span>
                        {" "}({claimNotes[key]}): {formatTimestamp(value)}
                        {key === "exp" && value * 1000 < Date.now() && (
                          <span className="text-rust ml-2">(expired)</span>
                        )}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          )}

          <div className="mt-8 max-w-2xl">
            <p className="text-sm text-slate mb-2">
              Verify signature (optional, HS256 only)
            </p>
            <div className="flex flex-wrap gap-2">
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Enter the signing secret"
                className="flex-1 min-w-[200px] p-2 border border-ink/15 rounded-md font-mono text-sm bg-white focus:border-rust outline-none"
              />
              <button
                onClick={verifySignature}
                className="px-4 py-2 bg-ink text-paper text-sm rounded-md hover:opacity-90"
              >
                Verify
              </button>
            </div>
            {verifyResult === "valid" && <p className="text-sm text-emerald-700 mt-2">Signature verified, this token matches the secret provided.</p>}
            {verifyResult === "invalid" && <p className="text-sm text-rust mt-2">Signature does not match. Wrong secret, or the token was altered.</p>}
            {verifyResult === "unsupported" && <p className="text-sm text-slate mt-2">This token uses {decoded.header.alg}, which isn't supported for in-browser verification here. Only HS256 is supported.</p>}
          </div>
        </>
      )}

      <div className="mt-14 pt-8 border-t border-ink/10 max-w-2xl prose-article">
        <h2 className="font-display text-lg font-semibold mb-3">How to use this</h2>
        <p>
          Paste any JWT into the box above and its header and payload decode
          instantly, no login or backend required. If the token includes an
          expiration or issued-at timestamp, it's translated into a readable
          date automatically. If you know the signing secret and the token
          uses HS256, you can optionally verify the signature to confirm the
          token hasn't been tampered with.
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
