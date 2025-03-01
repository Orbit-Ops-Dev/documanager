import { Binder, Section } from "../../types";

export interface DashboardProps {
  binders: Binder[];
  recentSections: (Section & { binderId: string; binderName: string })[];
  updateRecentSections: (binderId: string, sectionId: string) => void;
}