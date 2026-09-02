"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-1.5 text-sm text-slate hover:text-ink mb-6 group"
    >
      <svg width="14" height="10" viewBox="0 0 14 10" className="transition-transform group-hover:-translate-x-0.5">
        <path d="M5 1L1 5l4 4M1 5h12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back
    </button>
  );
}
