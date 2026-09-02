import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dev Toolkit — small tools and clear explanations",
    template: "%s | Dev Toolkit",
  },
  description:
    "Free browser-based developer tools plus plain-language explanations of hardware and computing basics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-paper text-ink">
        <header className="border-b border-ink/10">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-5 py-4">
            <a href="/" className="font-display text-lg font-semibold">
              dev-toolkit
            </a>
            <div className="flex gap-6 text-sm text-slate">
              <a href="/tools/dev" className="hover:text-ink">Tools</a>
              <a href="/blog/hardware" className="hover:text-ink">Hardware Explained</a>
              <a href="/about" className="hover:text-ink">About</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-ink/10 mt-20">
          <div className="max-w-5xl mx-auto px-5 py-8 text-sm text-slate flex flex-wrap justify-between gap-4">
            <span>© {new Date().getFullYear()} Dev Toolkit</span>
            <div className="flex gap-5">
              <a href="/privacy-policy" className="hover:text-ink">Privacy</a>
              <a href="/about" className="hover:text-ink">About</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
