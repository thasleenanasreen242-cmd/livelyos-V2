import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          Lively<span className="text-indigo-400">OS</span>
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Your personal life management platform.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500"
        >
          Open Dashboard
        </Link>
      </div>
    </main>
  );
}