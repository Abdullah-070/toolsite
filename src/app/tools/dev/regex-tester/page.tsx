import type { Metadata } from "next";
import RegexTester from "./client";

export const metadata: Metadata = {
  title: "Regex Tester Online",
  description:
    "Free online regex tester with live highlighted matches, match details, presets, and a quick reference cheat sheet.",
};

export default function Page() {
  return <RegexTester />;
}
