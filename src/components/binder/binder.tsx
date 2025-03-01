// src/pages/BinderView.tsx
import { useState } from 'react';
import {  useParams, Navigate } from 'react-router-dom';
import { 
  FiFolder,
  FiPlus,
  FiCalendar,
  FiChevronRight,
  FiFile,
  FiAlertCircle
} from 'react-icons/fi';
import { format } from 'date-fns';
import { BinderViewProps } from './types';
import { AddButton, BinderHeader, BinderTitle, BinderViewContainer, Button,  ButtonGroup, EmptyState, EmptyStateText, Input, NewSectionForm, SectionAction, SectionCard, SectionDetails, SectionIcon, SectionInfo, SectionName, SectionsGrid, SectionStat } from './styled';


const BinderView: React.FC<BinderViewProps> = ({ 
  binders, 
  addSection,
  updateRecentSections
}) => {
  const { binderId } = useParams<{ binderId: string }>();
  const [showNewSectionForm, setShowNewSectionForm] = useState(false);
  const [newSectionName, setNewSectionName] = useState('');
  
  const binder = binders.find(b => b.id === binderId);
  
  if (!binder) {
    return <Navigate to="/" replace />;
  }
  
  const handleAddSection = () => {
    if (newSectionName.trim() && binderId) {
      addSection(binderId, newSectionName.trim());
      setNewSectionName('');
      setShowNewSectionForm(false);
    }
  };
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      default:
        return <FiFolder />;
    }
  };
  
  return (
    <BinderViewContainer>
      <BinderHeader>
        <BinderTitle>
          {getIconComponent(binder.icon)}
          <h1>{binder.name}</h1>
        </BinderTitle>
        <AddButton onClick={() => setShowNewSectionForm(true)}>
          <FiPlus />
          Add Section
        </AddButton>
      </BinderHeader>
      
      {showNewSectionForm && (
        <NewSectionForm>
          <Input
            type="text"
            placeholder="Section name"
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
          />
          <ButtonGroup>
            <Button primary onClick={handleAddSection}>Add Section</Button>
            <Button onClick={() => setShowNewSectionForm(false)}>Cancel</Button>
          </ButtonGroup>
        </NewSectionForm>
      )}
      
      <SectionsGrid>
        {binder.sections.length > 0 ? (
          binder.sections.map(section => (
            <SectionCard 
              key={section.id}
              to={`/binder/${binderId}/section/${section.id}`}
              onClick={() => updateRecentSections(binderId, section.id)}
            >
              <SectionIcon>
                <FiFolder />
              </SectionIcon>
              <SectionInfo>
                <SectionName>{section.name}</SectionName>
                <SectionDetails>
                  <SectionStat>
                    <FiFile />
                    {section.files.length} file{section.files.length !== 1 ? 's' : ''}
                  </SectionStat>
                  {section.dueDate && (
                    <SectionStat>
                      <FiCalendar />
                      Due: {format(section.dueDate, 'MMM d, yyyy')}
                    </SectionStat>
                  )}
                </SectionDetails>
                <SectionAction>
                  View Section <FiChevronRight />
                </SectionAction>
              </SectionInfo>
            </SectionCard>
          ))
        ) : (
          <EmptyState>
            <FiAlertCircle />
            <EmptyStateText>No sections in this binder yet</EmptyStateText>
            <Button primary onClick={() => setShowNewSectionForm(true)}>
              <FiPlus />
              Add Your First Section
            </Button>
          </EmptyState>
        )}
      </SectionsGrid>
    </BinderViewContainer>
  );
};

export default BinderView;