import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppState, Binder, CommentCategory, RecurrenceType, Section } from './types';
import theme from './styles/theme';
import GlobalStyle from './styles/global-style';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard';
import BinderView from './components/binder/binder';
import SectionView from './components/section/section';

// Initial demo data
const initialState: AppState = {
  binders: [
    {
      id: '1',
      name: 'HR Documents',
      icon: 'users',
      sections: [
        {
          id: '1-1',
          name: 'Employee Onboarding',
          dueDate: new Date(2025, 3, 15),
          recurrence: 'monthly',
          files: [
            { id: '1-1-1', name: 'Onboarding_Checklist.pdf', type: 'pdf', size: 245000, lastModified: new Date(2025, 1, 10) }
          ],
          comments: [
            { id: 'c1-1-1', text: 'Please update the checklist with new IT requirements', category: 'informative', createdAt: new Date(2025, 2, 20) }
          ],
          lastOpened: new Date(2025, 2, 25)
        },
        {
          id: '1-2',
          name: 'Company Policies',
          dueDate: new Date(2025, 6, 30),
          recurrence: 'annual',
          files: [
            { id: '1-2-1', name: 'Employee_Handbook.pdf', type: 'pdf', size: 3500000, lastModified: new Date(2025, 0, 5) },
            { id: '1-2-2', name: 'Vacation_Policy.docx', type: 'docx', size: 125000, lastModified: new Date(2024, 11, 12) }
          ],
          comments: [
            { id: 'c1-2-1', text: 'The formatting in section 3.2 needs to be fixed', category: 'appearance', createdAt: new Date(2025, 1, 15) },
            { id: 'c1-2-2', text: 'There are several grammatical errors in the introduction', category: 'grammatical', createdAt: new Date(2025, 2, 5) }
          ],
          lastOpened: new Date(2025, 2, 20)
        }
      ]
    },
    {
      id: '2',
      name: 'Financial Records',
      icon: 'dollar-sign',
      sections: [
        {
          id: '2-1',
          name: 'Q1 Reports',
          dueDate: new Date(2025, 3, 1),
          recurrence: 'quarterly',
          files: [
            { id: '2-1-1', name: 'Q1_Financial_Summary.xlsx', type: 'xlsx', size: 450000, lastModified: new Date(2025, 2, 28) }
          ],
          comments: [],
          lastOpened: new Date(2025, 2, 28)
        },
        {
          id: '2-2',
          name: 'Annual Audit',
          dueDate: new Date(2025, 11, 15),
          recurrence: 'annual',
          files: [
            { id: '2-2-1', name: 'Audit_2024.pdf', type: 'pdf', size: 7800000, lastModified: new Date(2025, 0, 15) }
          ],
          comments: [
            { id: 'c2-2-1', text: 'Please review the financial projections for next year', category: 'informative', createdAt: new Date(2025, 1, 10) }
          ],
          lastOpened: new Date(2025, 1, 5)
        }
      ]
    },
    {
      id: '3',
      name: 'Project Plans',
      icon: 'briefcase',
      sections: [
        {
          id: '3-1',
          name: 'Website Redesign',
          dueDate: new Date(2025, 4, 10),
          recurrence: 'per occurrence',
          files: [
            { id: '3-1-1', name: 'Design_Mockups.zip', type: 'zip', size: 25000000, lastModified: new Date(2025, 2, 1) },
            { id: '3-1-2', name: 'Project_Timeline.xlsx', type: 'xlsx', size: 350000, lastModified: new Date(2025, 2, 10) }
          ],
          comments: [
            { id: 'c3-1-1', text: 'The timeline needs to be adjusted for the new requirements', category: 'informative', createdAt: new Date(2025, 2, 12) },
            { id: 'c3-1-2', text: 'Design mockups look great!', category: 'general', createdAt: new Date(2025, 2, 5) }
          ],
          lastOpened: new Date(2025, 2, 15)
        }
      ]
    }
  ],
  recentSections: []
};

const App = () => {
  const [appState, setAppState] = useState<AppState>(initialState);
  
  // Initialize recent sections from demo data
  useEffect(() => {
    // Get 5 most recently opened sections
    const allSections = appState.binders.flatMap(binder => 
      binder.sections.map(section => ({
        ...section,
        binderId: binder.id,
        binderName: binder.name
      }))
    );
    
    const sorted = [...allSections].sort((a, b) => 
      b.lastOpened.getTime() - a.lastOpened.getTime()
    ).slice(0, 5);
    
    setAppState(prev => ({
      ...prev,
      recentSections: sorted
    }));
  }, []);

  // Add a new binder
  const addBinder = (name: string, icon: string) => {
    const newBinder: Binder = {
      id: `binder-${Date.now()}`,
      name,
      icon,
      sections: []
    };
    
    setAppState(prev => ({
      ...prev,
      binders: [...prev.binders, newBinder]
    }));
  };

  // Add a new section to a binder
  const addSection = (binderId: string, name: string) => {
    const newSection: Section = {
      id: `section-${Date.now()}`,
      name,
      dueDate: null,
      recurrence: null,
      files: [],
      comments: [],
      lastOpened: new Date()
    };
    
    setAppState(prev => ({
      ...prev,
      binders: prev.binders.map(binder => 
        binder.id === binderId 
          ? { ...binder, sections: [...binder.sections, newSection] }
          : binder
      )
    }));
  };

  // Update section due date and recurrence
  const updateSectionDueDate = (
    binderId: string, 
    sectionId: string, 
    dueDate: Date | null, 
    recurrence: RecurrenceType | null
  ) => {
    setAppState(prev => ({
      ...prev,
      binders: prev.binders.map(binder => 
        binder.id === binderId 
          ? { 
              ...binder, 
              sections: binder.sections.map(section => 
                section.id === sectionId 
                  ? { ...section, dueDate, recurrence }
                  : section
              )
            }
          : binder
      )
    }));
  };

  // Upload file to a section
  const uploadFile = (binderId: string, sectionId: string, file: File) => {
    const newFile = {
      id: `file-${Date.now()}`,
      name: file.name,
      type: file.name.split('.').pop() || 'unknown',
      size: file.size,
      lastModified: new Date()
    };
    
    setAppState(prev => ({
      ...prev,
      binders: prev.binders.map(binder => 
        binder.id === binderId 
          ? { 
              ...binder, 
              sections: binder.sections.map(section => 
                section.id === sectionId 
                  ? { 
                      ...section, 
                      files: [...section.files, newFile],
                      lastOpened: new Date()
                    }
                  : section
              )
            }
          : binder
      )
    }));
    
    // Update recent sections
    updateRecentSections(binderId, sectionId);
  };

  // Add a comment to a section
  const addComment = (
    binderId: string,
    sectionId: string,
    text: string,
    category: CommentCategory,
    fileId?: string
  ) => {
    const newComment = {
      id: `comment-${Date.now()}`,
      text,
      category,
      createdAt: new Date(),
      fileId
    };
    
    setAppState(prev => ({
      ...prev,
      binders: prev.binders.map(binder => 
        binder.id === binderId 
          ? { 
              ...binder, 
              sections: binder.sections.map(section => 
                section.id === sectionId 
                  ? { 
                      ...section, 
                      comments: [...section.comments, newComment],
                      lastOpened: new Date()
                    }
                  : section
              )
            }
          : binder
      )
    }));
    
    // Update recent sections
    updateRecentSections(binderId, sectionId);
  };

  // Update recent sections when a section is opened
  const updateRecentSections = (binderId: string, sectionId: string) => {
    const binder = appState.binders.find(b => b.id === binderId);
    if (!binder) return;
    
    const section = binder.sections.find(s => s.id === sectionId);
    if (!section) return;
    
    // Update the last opened time for the section
    setAppState(prev => ({
      ...prev,
      binders: prev.binders.map(b => 
        b.id === binderId 
          ? { 
              ...b, 
              sections: b.sections.map(s => 
                s.id === sectionId 
                  ? { ...s, lastOpened: new Date() }
                  : s
              )
            }
          : b
      )
    }));
    
    // Update recent sections
    const updatedSection = {
      ...section,
      binderId,
      binderName: binder.name,
      lastOpened: new Date()
    };
    
    setAppState(prev => {
      // Remove this section from recent if it's already there
      const filtered = prev.recentSections.filter(s => 
        !(s.binderId === binderId && s.id === sectionId)
      );
      
      // Add it at the beginning and limit to 5
      return {
        ...prev,
        recentSections: [updatedSection, ...filtered].slice(0, 5)
      };
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="app">
          <Sidebar binders={appState.binders} addBinder={addBinder} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard 
                binders={appState.binders} 
                recentSections={appState.recentSections}
                updateRecentSections={updateRecentSections}
              />} />
              <Route path="/binder/:binderId" element={<BinderView 
                binders={appState.binders}
                addSection={addSection}
                updateRecentSections={updateRecentSections}
              />} />
              <Route path="/binder/:binderId/section/:sectionId" element={<SectionView 
                binders={appState.binders}
                updateSectionDueDate={updateSectionDueDate}
                uploadFile={uploadFile}
                updateRecentSections={updateRecentSections}
                addComment={addComment}
              />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
