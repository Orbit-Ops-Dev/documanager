// src/types.ts
export type RecurrenceType = 
  | '3 year'
  | 'annual'
  | 'monthly'
  | 'quarterly'
  | 'per occurrence'
  | 'per policy'
  | 'quinquennially'
  | 'semi annual'
  | 'sexennial'
  | 'weekly'
  | null;

export type CommentCategory = 
  | 'informative'
  | 'appearance'
  | 'grammatical'
  | 'general';

export interface Comment {
  id: string;
  text: string;
  category: CommentCategory;
  createdAt: Date;
  fileId?: string; // Optional - to associate with specific file
}

export interface File {
  id: string;
  name: string;
  type: string;
  size: number;
  lastModified: Date;
}

export interface Section {
  id: string;
  name: string;
  dueDate: Date | null;
  recurrence: RecurrenceType;
  files: File[];
  comments: Comment[];
  lastOpened: Date;
  binderId?: string;
  binderName?: string;
}

export interface Binder {
  id: string;
  name: string;
  icon: string;
  sections: Section[];
}

export interface AppState {
  binders: Binder[];
  recentSections: (Section & { binderId: string; binderName: string })[];
}
