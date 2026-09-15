import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "i5 vs i7: Which Processor Is Better?",
  description:
    "A plain explanation of Intel's i5 vs i7 naming, why generation matters as much as the number, and how to avoid the classic mistake of picking the wrong one.",
};

export default function I5VsI7() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-14 prose-article">
      <BackButton />
      <p className="text-sm text-slate mb-2">Hardware Explained</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6">
        i5 vs i7: Why an Older i7 Can Actually Be Worse Than a Newer i5
      </h1>
      <p className="text-slate mb-10">
        Updated for 2026. This is one of the most searched laptop-buying
        questions out there, and the honest answer is more complicated than
        "i7 is better."
      </p>

      <p>
        It feels like common sense: i7 sounds like a step up from i5, so it
        should always be the faster chip. That assumption is exactly what
        trips people up, because it only holds true when you're comparing two
        processors from the same generation. Once different generations get
        involved, the number after "i5" or "i7" stops telling the whole
        story.
      </p>

      <h2>What the number actually tells you</h2>
      <p>
        Within Intel's current lineup, i5 and i7 mainly differ in core count,
        cache size, and how high the chip can boost its clock speed under
        load. More cores and more cache generally mean better performance for
        heavier tasks like video editing, running multiple virtual machines,
        or juggling dozens of browser tabs alongside demanding apps. For
        typical everyday use like browsing, streaming, and office work, the
        difference is much smaller than the price gap suggests.
      </p>

      <h2>Where people actually get tripped up</h2>
      <p>
        The real confusion starts when you compare across generations, like
        an 11th generation i7 against a 6th generation i5. Every new
        generation usually brings a more efficient design, better
        performance per watt, and architectural improvements that a simple
        core count can't capture. It's entirely possible, and pretty common,
        for a newer i5 to outperform a considerably older i7, especially once
        you factor in how much faster modern chips handle everyday
        multitasking.
      </p>
      <p>
        This matters most when shopping for refurbished or older stock
        laptops, where an "i7" label can look tempting on the box while
        actually being several generations behind a cheaper, newer i5 model
        sitting right next to it.
      </p>

      <h2>The suffix matters almost as much as the number</h2>
      <p>
        Beyond generation, the letters at the end of the model name change
        things too. A "U" suffix usually means a lower-power chip built for
        battery life in thin, light laptops, while "H" or "HQ" suffixes are
        built for performance, running hotter and drawing more power in
        exchange for real speed. An i7 with a U suffix can end up slower than
        an H-suffix i5, because they're built for completely different
        priorities. This is the same reasoning behind the "H processor vs U
        processor" question people search separately.
      </p>

      <h2>How to actually compare two laptops</h2>
      <p>
        Instead of trusting the i5 or i7 label on its own, look at three
        things together: the generation number (usually the first one or two
        digits after "i5-" or "i7-"), the suffix letters at the end, and what
        you'll actually be doing with the laptop day to day. A recent-gen i5
        with an H suffix is often a better everyday performer than an
        older-gen i7 with a U suffix, even though the box makes the i7 sound
        like the upgrade.
      </p>

      <h2>A quick comparison</h2>
      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full text-sm border border-ink/10 max-w-2xl">
          <thead>
            <tr className="bg-ink/5 text-left">
              <th className="p-3 border-b border-ink/10">i5</th>
              <th className="p-3 border-b border-ink/10">i7</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-ink/10">Fewer cores, smaller cache</td>
              <td className="p-3 border-b border-ink/10">More cores, larger cache</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-ink/10">Great for everyday use and light multitasking</td>
              <td className="p-3 border-b border-ink/10">Better for heavy multitasking and creative work</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-ink/10">Usually cheaper</td>
              <td className="p-3 border-b border-ink/10">Usually pricier for the same generation</td>
            </tr>
            <tr>
              <td className="p-3">A recent-gen i5 can beat an old i7</td>
              <td className="p-3">An old i7 can lose to a recent i5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The bottom line</h2>
      <p>
        Don't buy based on the label alone. Check the generation, check the
        suffix, and think honestly about what you actually do on your
        laptop. Most people doing everyday work are perfectly served by a
        recent-generation i5, and paying extra for an i7 only makes sense if
        your workload genuinely needs the extra cores.
      </p>

      <div className="not-prose mt-14 pt-8 border-t border-ink/10">
        <p className="text-sm text-slate mb-4">Keep reading</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/blog/hardware/ssd-vs-hdd"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">SSD vs HDD explained</span>
            <span className="block text-xs text-slate mt-1">The storage spec that matters more than people think</span>
          </a>
          <a
            href="/blog/hardware/ram-vs-rom"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">RAM vs ROM explained</span>
            <span className="block text-xs text-slate mt-1">The other memory mix-up people search for</span>
          </a>
        </div>
      </div>
    </article>
  );
}
