export default function HardwareBlog() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-display text-3xl font-semibold mb-2">Hardware Explained</h1>
      <p className="text-slate mb-10 max-w-lg">
        Plain-language explanations of the computer parts and terms people
        search for before buying a laptop or building a PC.
      </p>
      <div className="grid gap-4">
        <a
          href="/blog/hardware/ram-vs-rom"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">RAM vs ROM: what the difference actually means for you</h2>
          <p className="text-sm text-slate mt-1">
            Why these two get confused, and what actually matters when you're buying a device.
          </p>
        </a>
      </div>
    </div>
  );
}
