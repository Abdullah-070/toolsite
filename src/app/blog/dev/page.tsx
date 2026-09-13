import BackButton from "@/components/BackButton";

export default function DevBlog() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-2">Dev Explained</h1>
      <p className="text-slate mb-10 max-w-lg">
        Plain-language explainers on developer tools and concepts, tied to the tools on this site.
      </p>
      <div className="grid gap-4">
        <a
          href="/blog/dev/what-is-regex"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">Regex explained: a beginner's guide to regular expressions</h2>
          <p className="text-sm text-slate mt-1">
            What regex is, why it's useful, and how to write and test your first pattern.
          </p>
        </a>
        <a
          href="/blog/dev/what-is-json"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">JSON explained: a beginner's guide to JavaScript Object Notation</h2>
          <p className="text-sm text-slate mt-1">
            What JSON is, why it's everywhere, and how to format, validate, and convert it.
          </p>
        </a>
      </div>
    </div>
  );
}
