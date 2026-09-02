export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-5">
      <section className="pt-16 pb-12 border-b border-ink/10">
        <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight max-w-xl">
          Small tools that just work, and hardware explained without the jargon.
        </h1>
        <p className="mt-5 text-slate max-w-lg text-lg">
          Free browser-based utilities for everyday development work, plus
          plain-language breakdowns of the computer parts and terms people
          search for before buying a laptop or building a PC.
        </p>
      </section>

      <section className="py-12">
        <h2 className="font-display text-xl font-semibold mb-6">Tools</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/tools/dev"
            className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <h3 className="font-medium">Developer tools</h3>
            <p className="text-sm text-slate mt-1">
              JSON formatter, regex tester, and other quick utilities. Coming online first.
            </p>
          </a>
          <div className="block p-5 border border-ink/10 rounded-md opacity-60">
            <h3 className="font-medium">Student tools</h3>
            <p className="text-sm text-slate mt-1">GPA calculator and citation generator. In progress.</p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-ink/10">
        <h2 className="font-display text-xl font-semibold mb-6">Hardware explained</h2>
        <a
          href="/blog/hardware/ram-vs-rom"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors max-w-md"
        >
          <h3 className="font-medium">RAM vs ROM: what the difference actually means for you</h3>
          <p className="text-sm text-slate mt-1">
            A plain explanation of the two, without the textbook wording.
          </p>
        </a>
      </section>
    </div>
  );
}
