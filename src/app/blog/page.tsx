const posts = [
  {
    href: "/blog/hardware/ram-vs-rom",
    title: "RAM vs ROM: what the difference actually means for you",
    excerpt: "Why these two get confused, and what actually matters when you're buying a device.",
    category: "Hardware",
  },
];

export default function BlogsHub() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
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
