import type { Metadata } from "next";
import JwtDecoder from "./client";

export const metadata: Metadata = {
  title: "JWT Decoder Online",
  description:
    "Free online JWT decoder. Paste a JSON Web Token to see its decoded header, payload, and readable expiration date instantly.",
};

export default function Page() {
  return <JwtDecoder />;
}
