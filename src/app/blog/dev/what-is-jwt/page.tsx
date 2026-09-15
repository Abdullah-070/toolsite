import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "JWT Explained for Beginners",
  description:
    "What a JWT actually is, how JSON Web Token authentication works, and how to decode a JWT online to see what's really inside it.",
};

export default function WhatIsJwt() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-14 prose-article">
      <BackButton />
      <p className="text-sm text-slate mb-2">Dev Explained</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6">
        JWT Explained: A Beginner's Guide to JSON Web Tokens
      </h1>
      <p className="text-slate mb-10">
        If you've ever stayed logged into a website without re-entering your
        password every time you click a link, there's a good chance a JWT
        was working quietly in the background.
      </p>

      <h2>What a JWT actually is</h2>
      <p>
        JWT stands for JSON Web Token, usually pronounced "jot." It's a
        compact, self-contained way of representing information as a JSON
        object, wrapped up and signed so that whoever created it can prove
        it hasn't been tampered with along the way. The most common use for
        a json web token is authentication: proving who you are to a website
        or app without your browser having to send your username and
        password with every single request.
      </p>
      <p>
        A JWT is just plain text, made up of three parts separated by dots,
        which looks something like this:
      </p>
      <pre className="bg-ink text-paper text-sm p-4 rounded-md overflow-auto my-4 break-all">
{`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`}
      </pre>
      <p>
        Even though this looks like a random jumble of characters, it isn't
        encrypted or hidden at all. It's just encoded, and anyone can decode
        it and read what's inside without needing any secret key.
      </p>

      <h2>The three parts of a JWT, broken down</h2>
      <p>Each of the three sections, separated by dots, has its own job:</p>
      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li>
          <strong>Header:</strong> a small JSON object describing the token
          type and which algorithm was used to sign it, usually something
          like HS256.
        </li>
        <li>
          <strong>Payload:</strong> the actual data, called claims, such as
          the user's ID, their role, and often an expiration time. This is
          the part people usually mean when they talk about jwt token
          decode, since this is where the useful information actually lives.
        </li>
        <li>
          <strong>Signature:</strong> created by combining the header,
          payload, and a secret key known only to the server, run through the
          signing algorithm. This is what makes the token tamper-evident,
          since changing even a single character in the payload produces a
          completely different signature.
        </li>
      </ul>

      <h2>Why people search for "jwt token decrypt" and don't find what they expect</h2>
      <p>
        This is one of the most common points of confusion. A standard JWT
        isn't encrypted, so there's nothing to decrypt. The header and
        payload are simply encoded using Base64URL, a variant of Base64 made
        safe for URLs, which means anyone can decode and read them instantly,
        without any password or key. The signature is the part that actually
        requires a secret, not to read the token, but to verify that it's
        authentic and hasn't been altered. If you genuinely need to hide the
        contents of a token from prying eyes, that requires a different,
        encrypted format called a JWE, which is far less common than the
        standard signed JWT most systems actually use.
      </p>

      <h2>Why JWTs are used for authentication</h2>
      <p>
        Before JWT authentication became common, many systems relied on
        server-side sessions, where the server had to remember who was
        logged in by storing session data in memory or a database, and match
        it against a session ID sent by the browser. JWTs flipped that
        around. Because a JWT contains all the necessary information about
        the user directly inside itself, and is signed so it can't be
        tampered with, the server doesn't need to store anything at all. It
        just verifies the signature on each request. This is called being
        stateless, and it's a big part of why json web token authentication
        scales so well across multiple servers, since none of them need to
        share session data with each other.
      </p>

      <h2>Where JWTs actually show up</h2>
      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li>Logging into a website and staying authenticated across pages without re-entering credentials.</li>
        <li>Authorizing requests to an API, where the token is sent in a header to prove the request is legitimate.</li>
        <li>Single sign-on systems, where one login grants access across multiple connected apps or services.</li>
        <li>Passing verified information, like a user's role or permissions, between different parts of a system that don't otherwise trust each other directly.</li>
      </ul>

      <h2>Common JWT claims worth recognizing</h2>
      <p>
        A handful of standard field names show up constantly inside a JWT
        payload, and recognizing them makes any token far easier to read:
      </p>
      <ul className="list-disc pl-6 mb-5 space-y-2">
        <li><code>sub</code>, short for subject, usually the user's unique ID.</li>
        <li><code>iat</code>, issued at, the timestamp the token was created.</li>
        <li><code>exp</code>, expiration, the timestamp after which the token should no longer be accepted.</li>
        <li><code>iss</code>, issuer, identifying who created the token.</li>
        <li><code>aud</code>, audience, identifying who the token is intended for.</li>
      </ul>
      <p>
        Timestamps in JWTs are typically written as Unix time, meaning a
        large number representing seconds since January 1, 1970, which is
        exactly why a good JWT decoder converts them into an actual readable
        date instead of leaving you to do the math yourself.
      </p>

      <h2>Decode a JWT online, without writing any code</h2>
      <p>
        You don't need to know a programming language to inspect a JWT.
        Since the header and payload are just encoded JSON, any online jwt
        decoder can instantly reveal them, letting you check exactly what
        claims a token contains, when it expires, and which algorithm signed
        it. This is genuinely useful even for non-developers debugging a
        login issue, or anyone curious what information an app or website is
        actually storing about their session.
      </p>
      <p>
        You can try this directly with the{" "}
        <a href="/tools/dev/jwt-decoder" className="text-rust hover:underline">
          free JWT decoder
        </a>{" "}
        on this site. Paste any token to instantly see its decoded header
        and payload, with expiration and issued-at timestamps automatically
        converted into readable dates. If you know the signing secret and
        the token uses the common HS256 algorithm, you can optionally verify
        the signature as well, entirely in your browser, with nothing sent
        to a server.
      </p>

      <h2>Is a JWT safe to trust just because it's a JWT</h2>
      <p>
        Not automatically. A JWT is only as trustworthy as the verification
        step behind it. Anyone can construct a token that looks correctly
        formatted, but without checking the signature against the correct
        secret or key, there's no way to know whether it's genuine or was
        forged. This is why a server should always verify a token's
        signature before trusting anything inside it, and why sensitive data
        generally shouldn't be stored inside a JWT payload at all, since
        anyone can decode and read it without needing the secret.
      </p>

      <h2>The bottom line</h2>
      <p>
        A JWT is a compact, signed way of passing verified claims between
        two parties, most commonly used to prove who a user is without the
        server needing to remember anything about them. It isn't encrypted,
        it's simply encoded and signed, which means anyone can read what's
        inside, but only the correct secret can prove it's authentic. Once
        you've decoded a token or two and seen the header, payload, and
        signature laid out plainly, the format stops looking cryptic and
        starts looking like exactly what it is, a well-structured, readable
        piece of JSON wrapped for safe transport.
      </p>

      <div className="not-prose mt-14 pt-8 border-t border-ink/10">
        <p className="text-sm text-slate mb-4">Keep reading</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/tools/dev/jwt-decoder"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">Try the JWT decoder</span>
            <span className="block text-xs text-slate mt-1">Decode any token and see readable claims instantly</span>
          </a>
          <a
            href="/blog/dev/what-is-json"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">JSON explained</span>
            <span className="block text-xs text-slate mt-1">A beginner's guide to JavaScript Object Notation</span>
          </a>
        </div>
      </div>
    </article>
  );
}
