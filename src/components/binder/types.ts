import { Binder } from "../../types";

export interface BinderViewProps {
  binders: Binder[];
  addSection: (binderId: string, name: string) => void;
  updateRecentSections: (binderId: string, sectionId: string) => void;
}

export interface ButtonProps {
  primary?: boolean;
}