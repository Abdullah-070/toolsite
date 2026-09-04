import BackButton from "@/components/BackButton";

export default function HardwareBlog() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <BackButton />
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
        <a
          href="/blog/hardware/ssd-vs-hdd"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">SSD vs HDD: which one actually matters for your next laptop</h2>
          <p className="text-sm text-slate mt-1">
            Why one feels instant and the other doesn't, and when the cheaper option still makes sense.
          </p>
        </a>
        <a
          href="/blog/hardware/i5-vs-i7-generation"
          className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
        >
          <h2 className="font-medium">i5 vs i7: why a newer i5 can beat an older i7</h2>
          <p className="text-sm text-slate mt-1">
            The generation number matters more than the tier label once you're comparing across years.
          </p>
        </a>
      </div>
    </div>
  );
}
