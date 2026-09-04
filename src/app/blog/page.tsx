import BackButton from "@/components/BackButton";

const posts = [
  {
    href: "/blog/hardware/ram-vs-rom",
    title: "RAM vs ROM: what the difference actually means for you",
    excerpt: "Why these two get confused, and what actually matters when you're buying a device.",
    category: "Hardware",
  },
  {
    href: "/blog/hardware/ssd-vs-hdd",
    title: "SSD vs HDD: which one actually matters for your next laptop",
    excerpt: "Why one feels instant and the other doesn't, and when the cheaper option still makes sense.",
    category: "Hardware",
  },
  {
    href: "/blog/hardware/i5-vs-i7-generation",
    title: "i5 vs i7: why a newer i5 can beat an older i7",
    excerpt: "The generation number matters more than the tier label once you're comparing across years.",
    category: "Hardware",
  },
];

export default function BlogsHub() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-2">Blogs</h1>
      <p className="text-slate mb-10 max-w-lg">
        Hardware comparisons and dev explainers, written in plain language.
      </p>
      <div className="grid gap-4">
        {posts.map((post) => (
          <a
            key={post.href}
            href={post.href}
            className="block p-5 border border-ink/10 rounded-md hover:border-rust transition-colors"
          >
            <span className="text-xs uppercase tracking-wide text-rust">{post.category}</span>
            <h2 className="font-medium mt-1">{post.title}</h2>
            <p className="text-sm text-slate mt-1">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
