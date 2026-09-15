import type { Metadata } from "next";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DevToolsKit Hub handles data: browser-based tools process input locally and this site does not sell personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 prose-article">
      <BackButton />
      <h1 className="font-display text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p>
        This site does not require an account and does not sell personal
        data. Tools that run in your browser process your input locally and
        don't send it to a server unless a tool description says otherwise.
      </p>
      <p>
        Basic analytics may be used to understand which pages are visited, in
        order to improve the site. If ads are added in the future, this page
        will be updated to reflect what data any ad provider collects.
      </p>
      <p className="text-sm text-slate">
        Replace this placeholder with a full policy before running ads, since
        AdSense and similar programs require specific disclosures.
      </p>
    </div>
  );
}
