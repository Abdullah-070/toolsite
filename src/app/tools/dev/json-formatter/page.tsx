import type { Metadata } from "next";
import JsonFormatter from "./client";

export const metadata: Metadata = {
  title: "JSON Formatter and Validator",
  description:
    "Free online JSON formatter, minifier, and validator with a tree view and precise error locations. Runs entirely in your browser.",
};

export default function Page() {
  return <JsonFormatter />;
}
