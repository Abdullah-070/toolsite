export default function DevTools() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-display text-3xl font-semibold mb-4">Developer Tools</h1>
      <p className="text-slate mb-8 max-w-lg">
        The first tools (JSON formatter, regex tester, UUID generator) are
        being built here next. Each one will get its own page and its own
        short guide on how to use it.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <a
          href="/tools/dev/json-formatter"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">JSON Formatter</h2>
          <p className="text-sm text-slate mt-1">Format or minify JSON instantly, in your browser.</p>
        </a>
        <div className="p-5 border border-dashed border-ink/20 rounded-md text-slate text-sm">
          Regex tester, coming soon.
        </div>
      </div>
    </div>
  );
}
