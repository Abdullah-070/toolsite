import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "RAM vs ROM: What the Difference Actually Means for You",
  description:
    "A plain-language explanation of RAM and ROM, what each one actually does in your device, and why the difference matters when you're buying a laptop or phone.",
};

export default function RamVsRom() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-14 prose-article">
      <BackButton />
      <p className="text-sm text-slate mb-2">Hardware Explained</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-6">
        RAM vs ROM: What the Difference Actually Means for You
      </h1>
      <p className="text-slate mb-10">
        Updated for 2026. A version of this question comes up almost every time
        someone shops for a new laptop or phone, so let's actually settle it.
      </p>

      <p>
        If you've ever stood in a store looking at two laptops, one with "8GB
        RAM, 256GB storage" and the other with "16GB RAM, 512GB storage," and
        felt slightly unsure what any of that actually means for how the
        laptop will feel to use, you're not alone. RAM and ROM get lumped
        together a lot because they're both called "memory," but they do
        almost opposite jobs.
      </p>

      {/*
        Image slot: once you have a labeled RAM-vs-ROM diagram, add it here using next/image, e.g.:
        <Image src="/images/ram-vs-rom-diagram.webp" alt="Diagram comparing RAM and ROM" width={700} height={400} className="rounded-md my-8" />
        Keep it under ~100KB and in .webp format so it doesn't slow the page down.
      */}

      <h2>The short version</h2>
      <p>
        RAM is where your device keeps everything it's actively working on
        right now. ROM is where it keeps the instructions it needs to even
        start up in the first place. RAM forgets everything the moment you
        turn the power off. ROM doesn't forget, which is exactly why it's
        used for the one job that has to survive a shutdown: booting the
        device back up.
      </p>

      <h2>What RAM is actually doing while you use your computer</h2>
      <p>
        Think about what happens when you open five browser tabs, a music app,
        and a document at the same time. Your computer needs somewhere fast to
        hold all of that so it can jump between tasks instantly. That's RAM.
        It's built for speed, not for permanence, so the tradeoff is that
        everything sitting in RAM disappears the second you lose power or
        restart. This is also why closing an unsaved document loses your
        work: it only existed in RAM until you hit save, which is the moment
        it moved somewhere more permanent.
      </p>
      <p>
        More RAM generally means you can keep more things open at once
        without your device slowing down or apps freezing while it juggles
        everything. That's the practical reason people care about the number
        when buying a device. It's less about raw speed of a single task and
        more about how many things can run smoothly together.
      </p>

      <h2>What ROM is actually for</h2>
      <p>
        ROM holds something much smaller and much more boring, on purpose.
        It's the basic startup instructions, sometimes called firmware or
        BIOS, that tell the hardware what to do the instant you press the
        power button, before your operating system has even loaded. Because
        this information needs to survive being switched off, it's stored in
        a way that isn't meant to change often, if at all.
      </p>
      <p>
        This is also the part that trips people up: in everyday
        conversation, especially with phones, "ROM" often gets used loosely
        to mean the storage where your photos, apps, and files live. That's
        actually closer to what's technically called flash storage, not
        classic ROM. True ROM is a much smaller, fixed chunk of memory
        dedicated to startup instructions, while your phone's "128GB" or
        "256GB" storage number refers to flash storage, which behaves more
        like a hard drive than like ROM.
      </p>

      <h2>Why this actually matters when you're buying something</h2>
      <p>
        When a listing says "8GB RAM," that number affects how many apps and
        browser tabs you can run before things start lagging. It has nothing
        to do with how many photos or files you can store, that's a separate
        number, usually the storage size like 128GB or 256GB. Confusing the
        two is one of the most common reasons people end up unhappy with a
        purchase, buying a device with plenty of storage but not enough RAM
        to actually run smoothly.
      </p>
      <p>
        A simple way to keep it straight: RAM is about how much you can do at
        once, and storage is about how much you can keep. ROM, in the strict
        sense, isn't really something you shop for at all. It's fixed by the
        manufacturer and just quietly does its one job every time you power
        on.
      </p>

      <h2>A quick comparison</h2>
      <div className="overflow-x-auto my-6 not-prose">
        <table className="w-full text-sm border border-ink/10 max-w-2xl">
          <thead>
            <tr className="bg-ink/5 text-left">
              <th className="p-3 border-b border-ink/10">RAM</th>
              <th className="p-3 border-b border-ink/10">ROM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b border-ink/10">Loses data when powered off</td>
              <td className="p-3 border-b border-ink/10">Keeps data when powered off</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-ink/10">Holds what you're actively using</td>
              <td className="p-3 border-b border-ink/10">Holds startup instructions</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-ink/10">Can be read and rewritten constantly</td>
              <td className="p-3 border-b border-ink/10">Rarely rewritten, if ever</td>
            </tr>
            <tr>
              <td className="p-3">Bigger numbers help with multitasking</td>
              <td className="p-3">Fixed size, not something you upgrade</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The bottom line</h2>
      <p>
        RAM and ROM sound alike and even get confused in casual conversation,
        especially around phones, but once you separate what each one is
        actually responsible for, the difference is pretty intuitive. RAM is
        short-term, fast, and forgetful. ROM is small, fixed, and permanent.
        The next time you're comparing specs, that distinction alone should
        make the numbers on the box a lot easier to read.
      </p>

      <div className="not-prose mt-14 pt-8 border-t border-ink/10">
        <p className="text-sm text-slate mb-4">Keep reading</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="/blog/hardware/ssd-vs-hdd"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">SSD vs HDD explained</span>
            <span className="block text-xs text-slate mt-1">The other storage mix-up people search for</span>
          </a>
          <a
            href="/tools/dev"
            className="block p-4 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-sm font-medium">Try the developer tools</span>
            <span className="block text-xs text-slate mt-1">Free browser-based utilities, no sign-up</span>
          </a>
        </div>
      </div>
    </article>
  );
}
