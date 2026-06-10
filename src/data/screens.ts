import { screenRoutes, type ScreenRoute } from "../routes";

export interface CategorizedScreen extends ScreenRoute {
  category: string;
}

// Ordered category rules — first match wins.
const RULES: Array<{ category: string; test: (id: string) => boolean }> = [
  { category: "Entry & Access", test: (id) => /role_selection|system_settings|staff_management/.test(id) },
  { category: "Role Dashboards", test: (id) => /home_dashboard|home_overview|home_desktop|employer_dashboard|helper_dashboard|master_analytics/.test(id) },
  { category: "Leads & Sales Pipeline", test: (id) => /lead_|warm_leads|pipeline|kpi|consultant|hiring_pipeline/.test(id) },
  { category: "Candidates & Interviews", test: (id) => /candidate|interview/.test(id) },
  { category: "Placement & Operations", test: (id) => /placement|operations|deployment|service_order|booking|job_order|job_details/.test(id) },
  { category: "Documents & Compliance", test: (id) => /document|compliance|contract|mom_|escalation/.test(id) },
  { category: "Embassy & Jobs", test: (id) => /embassy|my_jobs/.test(id) },
  { category: "Finance & Payments", test: (id) => /ledger|payment|earnings|billing|financial|report/.test(id) },
  { category: "Alerts, Issues & Complaints", test: (id) => /reminder|alert|notification|complaint|issue/.test(id) },
];

export function categorize(route: ScreenRoute): CategorizedScreen {
  const rule = RULES.find((r) => r.test(route.id));
  return { ...route, category: rule ? rule.category : "Other" };
}

export const CATEGORY_ORDER = [
  "Entry & Access",
  "Role Dashboards",
  "Leads & Sales Pipeline",
  "Candidates & Interviews",
  "Placement & Operations",
  "Documents & Compliance",
  "Embassy & Jobs",
  "Finance & Payments",
  "Alerts, Issues & Complaints",
  "Other",
];

export function allCategorized(): CategorizedScreen[] {
  return screenRoutes.map(categorize);
}

export function prettyTitle(s: CategorizedScreen): string {
  const t = s.title.replace(/\s*\|\s*PlacementSource\s*$/i, "").trim();
  if (t && t.toLowerCase() !== s.id) return t;
  return s.id
    .replace(/_desktop$/i, "")
    .replace(/_\d+$/i, "")
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
