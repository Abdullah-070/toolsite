import type { Metadata } from "next";
import Base64Tool from "./client";

export const metadata: Metadata = {
  title: "Base64 Encoder and Decoder Online",
  description:
    "Free online Base64 encoder and decoder. Convert text to Base64 or decode it back instantly, entirely in your browser.",
};

export default function Page() {
  return <Base64Tool />;
}
