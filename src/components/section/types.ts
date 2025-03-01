import { Binder, CommentCategory, RecurrenceType } from "../../types";

export interface ButtonProps {
  primary?: boolean;
}

export interface SectionViewProps {
  binders: Binder[];
  updateSectionDueDate: (
    binderId: string, 
    sectionId: string, 
    dueDate: Date | null, 
    recurrence: RecurrenceType | null
  ) => void;
  uploadFile: (binderId: string, sectionId: string, file: File) => void;
  updateRecentSections: (binderId: string, sectionId: string) => void;
  addComment: (
    binderId: string,
    sectionId: string,
    text: string,
    category: CommentCategory,
    fileId?: string
  ) => void;
}
