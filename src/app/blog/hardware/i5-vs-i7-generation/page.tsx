import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "i5 vs i7: Why a Newer i5 Can Beat an Older i7",
  description:
    "Why comparing i5 and i7 by name alone is misleading once different generations are involved, and how to actually judge which processor is better.",
};

export default function I5VsI7() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-14 prose-article">
      <BackButton />
      <p className="text-sm text-slate mb-2">Hardware Explained</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6">
        i5 vs i7: Why a Newer i5 Can Beat an Older i7
      </h1>
      <p className="text-slate mb-10">
        Updated for 2026. "i7 is always better than i5" is one of the most
        repeated pieces of laptop-shopping advice, and it's also one of the
        least reliable once older and newer models get mixed together.
      </p>

      <p>
        It feels intuitive: i7 sounds like a step up from i5, so surely it's
        the better chip. That holds up reasonably well when you're comparing
        two processors from the same generation. It falls apart the moment
        you compare across generations, like a 6th generation i7 against an
        11th generation i5, which is exactly the kind of comparison people
        run into when a "great deal" older laptop shows up next to a
        cheaper, newer one.
      </p>

      <h2>What i5 and i7 actually tell you</h2>
      <p>
        Within a single generation, i7 chips typically get more cores or
        threads, higher clock speeds, and a bit more cache than the i5 in the
        same lineup. That part of the naming is consistent. What it doesn't
        tell you is how old the underlying chip architecture is, and
        architecture improvements between generations can be significant.
        Intel usually redesigns efficiency, power handling, and per-core
        performance every generation or two, sometimes enough to close the
        gap between an old i7 and a new i5 entirely.
      </p>

      <h2>Why a newer i5 can genuinely win</h2>
      <p>
        A processor's generation reflects the underlying manufacturing
        process and architecture it was built on. A newer generation often
        does more per clock cycle and runs more efficiently, even at a lower
        official clock speed. This is why it's entirely possible for an
        11th generation i5 to outperform a 6th or 7th generation i7 in normal
        use, despite technically being the "lower" tier chip. The generation
        number, not just the i5 or i7 label, ends up being the bigger factor
        in how the laptop will actually feel to use.
      </p>
      <p>
        A simple way to picture it: think of i5 versus i7 as a trim level,
        like a base model versus a fully loaded version of the same car. The
        generation number is more like the car's model year. A fully loaded
        car from ten years ago can still be slower and less efficient than a
        base model car from this year. Trim level and model year are
        separate questions, and both matter.
      </p>

      <h2>How to actually compare two chips</h2>
      <p>
        Instead of trusting the i5 or i7 label alone, look at the full model
        number on the spec sheet, something like i5-1135G7 or i7-6700HQ. The
        first one or two digits after "i5-" or "i7-" tell you the generation.
        Once you know the generation of both chips you're comparing, a quick
        search for that exact model number against benchmark sites will show
        real, tested performance rather than relying on the i5 versus i7
        label to decide for you.
      </p>
      <p>
        It's also worth checking the letter suffix at the end, like H, U, or
        G7, since that affects power and performance too, and is a common
        enough mix-up that it deserves its own explanation elsewhere on this
        site.
      </p>

      <h2>A quick comparison</h2>
      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full text-sm border border-ink/10 max-w-2xl">
          <thead>
            <tr className="bg-ink/5 text-left">
              <th className="p-3 border-b border-ink/10">Same generation</th>
              <th className="p-3 border-b border-ink/10">Different generations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-ink/10">i7 is reliably the faster chip</td>
              <td className="p-3 border-b border-ink/10">Newer i5 can beat an older i7</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-ink/10">Tier label is a fair comparison</td>
              <td className="p-3 border-b border-ink/10">Generation number matters more than the tier</td>
            </tr>
            <tr>
              <td className="p-3">Price usually reflects the real gap</td>
              <td className="p-3">Price can be misleading without checking benchmarks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The bottom line</h2>
      <p>
        i5 versus i7 is a fine shortcut only when the generation is identical
        on both sides. The second you're comparing a laptop from a few years
        ago to a current one, the generation number deserves more attention
        than the tier label. Check the full model number before assuming the
        i7 is automatically the better buy.
      </p>

      <div className="not-prose mt-14 pt-8 border-t border-ink/10">
        <p className="text-sm text-slate mb-4">Keep reading</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/blog/hardware/ssd-vs-hdd"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">SSD vs HDD explained</span>
            <span className="block text-xs text-slate mt-1">The storage half of a laptop buying decision</span>
          </a>
          <a
            href="/tools/dev/regex-tester"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">Try the regex tester</span>
            <span className="block text-xs text-slate mt-1">Free, runs in your browser, no sign-up</span>
          </a>
        </div>
      </div>
    </article>
  );
}
