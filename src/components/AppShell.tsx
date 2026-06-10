import { useState, useMemo, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { allCategorized, CATEGORY_ORDER, prettyTitle } from "../data/screens";

export default function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const location = useLocation();
  const onDirectory = location.pathname === "/";

  const screens = useMemo(() => allCategorized(), []);
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list = needle
      ? screens.filter(
          (s) =>
            s.id.includes(needle) ||
            prettyTitle(s).toLowerCase().includes(needle) ||
            s.category.toLowerCase().includes(needle)
        )
      : screens;
    return CATEGORY_ORDER.map((cat) => ({
      cat,
      items: list.filter((s) => s.category === cat),
    })).filter((g) => g.items.length > 0);
  }, [screens, q]);

  return (
    <div className="min-h-screen w-full bg-[#F7F6F2]">
      {children}

      {!onDirectory && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open screen navigator"
          className="fixed bottom-5 right-5 z-[9998] flex items-center gap-2 rounded-full bg-[#004f54] px-4 py-3 font-manrope text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined !text-[20px]">apps</span>
          Screens
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-[9999] font-manrope">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E5E3DA] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-extrabold tracking-tight text-[#004f54]">
                  MingHwee
                </span>
                <span className="rounded-full bg-[#004f54]/10 px-2 py-0.5 text-[11px] font-bold text-[#004f54]">
                  {screens.length} screens
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="border-b border-[#E5E3DA] px-5 py-3">
              <div className="flex items-center gap-2 rounded-lg border border-[#E5E3DA] bg-[#F7F6F2] px-3 py-2">
                <span className="material-symbols-outlined !text-[20px] text-slate-400">
                  search
                </span>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search screens…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#004f54] hover:underline"
              >
                <span className="material-symbols-outlined !text-[18px]">grid_view</span>
                Open full directory
              </Link>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-3">
              {filtered.map((group) => (
                <div key={group.cat} className="mb-4">
                  <div className="px-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {group.cat}
                  </div>
                  {group.items.map((s) => {
                    const active = location.pathname === s.path;
                    return (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                          active
                            ? "bg-[#004f54] text-white"
                            : "text-slate-700 hover:bg-[#004f54]/8"
                        }`}
                      >
                        <span className="truncate">{prettyTitle(s)}</span>
                        <span className="material-symbols-outlined !text-[18px] opacity-40">
                          chevron_right
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-slate-400">
                  No screens match “{q}”.
                </p>
              )}
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}
