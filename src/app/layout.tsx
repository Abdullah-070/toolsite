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
        <header className="border-b border-ink/10 relative z-20">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-5 py-4">
            <a href="/" className="font-display text-lg font-semibold flex items-center gap-2">
              {/* Logo slot: replace this span with an <img src="/logo.svg" .../> once the logo is ready */}
              <span className="w-6 h-6 rounded bg-rust inline-block" aria-hidden="true" />
              dev-toolkit
            </a>
            <div className="flex gap-6 text-sm text-slate">
              <a href="/" className="hover:text-ink">Home</a>

              <div className="relative group">
                <button className="hover:text-ink flex items-center gap-1">
                  Tools
                  <svg width="10" height="6" viewBox="0 0 10 6" className="mt-px">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="w-56 bg-paper border border-ink/10 rounded-md shadow-sm py-2">
                    <a href="/tools/dev" className="block px-4 py-2 hover:bg-ink/5">
                      <span className="block text-ink text-sm">Developer tools</span>
                      <span className="block text-xs text-slate">JSON, regex, encoders</span>
                    </a>
                    <a href="/tools/student" className="block px-4 py-2 hover:bg-ink/5">
                      <span className="block text-ink text-sm">Student tools</span>
                      <span className="block text-xs text-slate">GPA, citations</span>
                    </a>
                  </div>
                </div>
              </div>

              <a href="/blog" className="hover:text-ink">Blogs</a>
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
