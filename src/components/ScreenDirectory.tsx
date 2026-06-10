import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { allCategorized, CATEGORY_ORDER, prettyTitle } from "../data/screens";

export default function ScreenDirectory() {
  const screens = useMemo(() => allCategorized(), []);
  const [q, setQ] = useState("");

  const groups = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list = screens.filter(
      (s) =>
        !needle ||
        s.id.includes(needle) ||
        prettyTitle(s).toLowerCase().includes(needle) ||
        s.category.toLowerCase().includes(needle)
    );
    return CATEGORY_ORDER.map((cat) => ({
      cat,
      items: list.filter((s) => s.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [screens, q]);

  const total = screens.length;

  return (
    <div className="min-h-screen w-full bg-[#F7F6F2] font-manrope text-[#1a1c1b]">
      <header className="sticky top-0 z-40 border-b border-[#E5E3DA] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-extrabold tracking-tight text-[#004f54]">
              MingHwee
            </span>
            <span className="hidden text-sm text-slate-500 sm:inline">
              Domestic Placement Platform — Desktop Screen Library
            </span>
          </div>
          <span className="rounded-full bg-[#004f54]/10 px-3 py-1 text-xs font-bold text-[#004f54]">
            {total} screens
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-[1200px] px-6 pt-12 pb-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#004f54]/70">
          Stitch design replica · React + TypeScript + Vite
        </p>
        <h1 className="mt-2 max-w-3xl text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#003E60]">
          Every desktop screen of the MingHwee operating system, in one place.
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
          Pixel-faithful reproductions of all {total} designed desktop screens — each on its
          own route. Pick a screen below or use the floating navigator on any page.
        </p>

        <div className="mt-6 flex items-center gap-2 rounded-xl border border-[#E5E3DA] bg-white px-4 py-3 shadow-sm">
          <span className="material-symbols-outlined text-slate-400">search</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, role, or category…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </section>

      <main className="mx-auto max-w-[1200px] px-6 pb-24">
        {groups.map((group) => (
          <section key={group.cat} className="mt-10">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-lg font-bold text-[#003E60]">{group.cat}</h2>
              <span className="h-px flex-1 bg-[#E5E3DA]" />
              <span className="text-xs font-semibold text-slate-400">
                {group.items.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-[#E5E3DA] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#004f54] hover:shadow-[0px_18px_30px_-12px_rgba(0,79,84,0.25)]"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-[#004f54] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-[#004f54]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#004f54]">
                      Desktop
                    </span>
                    <span className="material-symbols-outlined text-slate-300 transition-colors group-hover:text-[#004f54]">
                      arrow_outward
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug text-[#1a1c1b]">
                    {prettyTitle(s)}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-slate-400">{s.path}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
        {groups.length === 0 && (
          <p className="py-20 text-center text-slate-400">No screens match your search.</p>
        )}
      </main>

      <footer className="border-t border-[#E5E3DA] bg-white py-8">
        <div className="mx-auto max-w-[1200px] px-6 text-sm text-slate-500">
          © {new Date().getFullYear()} MingHwee Employment Agency · Internal platform screen
          library.
        </div>
      </footer>
    </div>
  );
}
