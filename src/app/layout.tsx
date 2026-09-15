import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devtoolskit.tech"),
  title: {
    default: "DevToolsKit Hub — small tools and clear explanations",
    template: "%s | DevToolsKit Hub",
  },
  description:
    "Free browser-based developer tools plus plain-language explanations of hardware and computing basics.",
  openGraph: {
    siteName: "DevToolsKit Hub",
    type: "website",
    title: "DevToolsKit Hub — small tools and clear explanations",
    description:
      "Free browser-based developer tools plus plain-language explanations of hardware and computing basics.",
    url: "https://www.devtoolskit.tech/",
  },
  twitter: {
    card: "summary",
    title: "DevToolsKit Hub — small tools and clear explanations",
    description:
      "Free browser-based developer tools plus plain-language explanations of hardware and computing basics.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DevToolsKit Hub",
              url: "https://www.devtoolskit.tech/",
              description:
                "Free browser-based developer tools plus plain-language explanations of hardware and computing basics.",
            }),
          }}
        />
      </head>
      <body className="font-body bg-paper text-ink">
        <SiteNav />
        <main>{children}</main>
        <footer className="border-t border-ink/10 mt-20">
          <div className="max-w-5xl mx-auto px-5 py-8 text-sm text-slate flex flex-wrap justify-between gap-4">
            <span>© {new Date().getFullYear()} DevToolsKit Hub</span>
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
