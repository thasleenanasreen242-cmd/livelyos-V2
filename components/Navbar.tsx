export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-8 py-5">

      <h1 className="text-2xl font-bold text-white">
        Lively<span className="text-indigo-400">OS</span>
      </h1>

      <button className="rounded-lg bg-indigo-500 px-5 py-2 text-white hover:bg-indigo-600">
        Profile
      </button>

    </header>
  );
}