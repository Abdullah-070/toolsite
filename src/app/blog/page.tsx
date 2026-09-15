import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Hardware comparisons and developer tool guides, written in plain language for beginners and non-coders.",
};

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
    href: "/blog/hardware/i5-vs-i7",
    title: "i5 vs i7: why a newer i5 can beat an older i7",
    excerpt: "The generation number matters more than the tier label once you're comparing across years.",
    category: "Hardware",
  },
  {
    href: "/blog/dev/what-is-regex",
    title: "Regex explained: a beginner's guide to regular expressions",
    excerpt: "What regex is, why it's useful, and how to write and test your first pattern in Python and JavaScript.",
    category: "Dev",
  },
  {
    href: "/blog/dev/what-is-json",
    title: "JSON explained: a beginner's guide to JavaScript Object Notation",
    excerpt: "What JSON is, why it's everywhere, and how to format, validate, and convert it.",
    category: "Dev",
  },
  {
    href: "/blog/dev/what-is-base64",
    title: "Base64 explained: a beginner's guide to encoding and decoding",
    excerpt: "What Base64 is, why it exists, and how to encode or decode it in Python and JavaScript.",
    category: "Dev",
  },
  {
    href: "/blog/dev/what-is-jwt",
    title: "JWT explained: a beginner's guide to JSON Web Tokens",
    excerpt: "What a JWT is, how JWT authentication works, and how to decode one yourself.",
    category: "Dev",
  },
  {
    href: "/blog/dev/what-is-uuid",
    title: "UUID and GUID explained: what they are and why they're random",
    excerpt: "Why unique IDs need to be random, and how to generate one instantly.",
    category: "Dev",
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
