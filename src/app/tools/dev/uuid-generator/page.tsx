import type { Metadata } from "next";
import UuidGenerator from "./client";

export const metadata: Metadata = {
  title: "UUID / GUID Generator Online",
  description:
    "Free online UUID and GUID generator. Generate random version 4 UUIDs instantly, one or up to a hundred at a time.",
};

export default function Page() {
  return <UuidGenerator />;
}
