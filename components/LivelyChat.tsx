"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LivelyChat() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

if (pathname === "/ai") {
  return null;
}

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl border border-slate-700 bg-slate-900 p-5 text-white shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Lively AI 🤖</h3>

            <button
              onClick={() => setOpen(false)}
              className="rounded p-1 text-xl text-slate-400 hover:bg-slate-800 hover:text-white"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-slate-400">
            Need help managing your money, meals, or day?
          </p>

          <Link
            href="/ai"
            className="mt-4 block rounded-lg bg-indigo-500 px-4 py-3 text-center"
          >
            Open Assistant
          </Link>
        </div>
      )}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500 text-2xl shadow-lg"
        >
          🤖
        </button>
      )}
    </>
  );
}