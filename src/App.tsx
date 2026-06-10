import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { screenRoutes } from "./routes";
import AppShell from "./components/AppShell";
import ScreenDirectory from "./components/ScreenDirectory";

function PageFallback() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="flex items-center gap-3 text-[#004f54]">
        <span className="material-symbols-outlined animate-spin">progress_activity</span>
        <span className="font-manrope font-semibold">Loading screen…</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppShell>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<ScreenDirectory />} />
          {screenRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<ScreenDirectory />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}
