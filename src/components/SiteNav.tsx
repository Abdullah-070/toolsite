"use client";
import { useState, useRef, useEffect } from "react";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-ink/10 relative z-20">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-5 py-4">
        <a href="/" className="font-display text-lg font-semibold flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-rust inline-block" aria-hidden="true" />
          dev-toolkit
        </a>

        <button
          className="sm:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14">
            <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <div className="hidden sm:flex gap-6 text-sm text-slate items-center">
          <a href="/" className="hover:text-ink">Home</a>

          <div className="relative" ref={toolsRef}>
            <button
              type="button"
              onClick={() => setToolsOpen(!toolsOpen)}
              aria-expanded={toolsOpen}
              className="hover:text-ink flex items-center gap-1"
            >
              Tools
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                className={`mt-px transition-transform ${toolsOpen ? "rotate-180" : ""}`}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-56 bg-paper border border-ink/10 rounded-md shadow-sm py-2">
                  <a
                    href="/tools/dev"
                    className="block px-4 py-2 hover:bg-ink/5"
                    onClick={() => setToolsOpen(false)}
                  >
                    <span className="block text-ink text-sm">Developer tools</span>
                    <span className="block text-xs text-slate">JSON, regex, encoders</span>
                  </a>
                  <a
                    href="/tools/student"
                    className="block px-4 py-2 hover:bg-ink/5"
                    onClick={() => setToolsOpen(false)}
                  >
                    <span className="block text-ink text-sm">Student tools</span>
                    <span className="block text-xs text-slate">GPA, citations</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="/blog" className="hover:text-ink">Blogs</a>
          <a href="/about" className="hover:text-ink">About</a>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-ink/10 px-5 py-3 flex flex-col gap-3 text-sm text-slate bg-paper">
          <a href="/" className="hover:text-ink">Home</a>
          <a href="/tools/dev" className="hover:text-ink">Developer tools</a>
          <a href="/tools/student" className="hover:text-ink">Student tools</a>
          <a href="/blog" className="hover:text-ink">Blogs</a>
          <a href="/about" className="hover:text-ink">About</a>
        </div>
      )}
    </header>
  );
}
